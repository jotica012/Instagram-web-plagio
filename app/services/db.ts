import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc, onSnapshot, doc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { DataShape } from '../components/Home/data.js'

interface dataSnapshot extends DataShape {
  data: () => DataShape ;
}

const firebaseConfig = {
  apiKey: "AIzaSyASV1i-vhei2x5FTcNe_YSeSsx7hR1VOrw",
  authDomain: "dcatest-7dbde.firebaseapp.com",
  projectId: "dcatest-7dbde",
  storageBucket: "dcatest-7dbde.appspot.com",
  messagingSenderId: "524144328135",
  appId: "1:524144328135:web:9e5e1d5f4caf039abd2de2"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const usersRef = collection(db,"usuarios");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });

        // if(querySnapshot.empty){
        //   return false;
        // } else {
        //   return true;
        // }
        
        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const docRef = await addDoc(collection(db,"usuarios"),{
            email,
            password
        });
        return true;
    } catch (error) {
        return false;
    }
  }

 
  export const addPost = async ({
    username,
    location,
    bg
  }:{
    username: string;
    location: string;
    bg: string;
  }) => {
    try {
        await addDoc(collection(db,"posts"),{
          username,
          bg,
          location,user: "./img/ppp2.png",
          caption: "Wenas juanes",
          likes: 10,
          comments: 10,
          days: 2,
        });
        return true;
    } catch (error) {
        return false;
    }
  }

  export const getPosts = async () => {
    try {
      const posts: DataShape [] = [];
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((post: dataSnapshot) => {
        posts.push(post.data());
        console.log(post);
        
      });
      return posts;
    } catch (error) {
      console.error(error);
      alert('Error!');
    }
  }

  export const listenposts = (cb: (posts: any)=> void) => {
    try {
      onSnapshot (collection(db, "posts"), (res) => {
        const posts = res.docs.map((doc: any) => ({id: doc.id, data: doc.data()}));
        cb(posts);
      });

    } catch (error) {

    }
  }
  
  
 
