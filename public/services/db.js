var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
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
const usersRef = collection(db, "usuarios");
export const queryUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = query(usersRef, where("email", "==", email), where("password", "==", password));
        const querySnapshot = yield getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
        // if(querySnapshot.empty){
        //   return false;
        // } else {
        //   return true;
        // }
        return !querySnapshot.empty;
    }
    catch (error) {
        return false;
    }
});
export const addUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, "usuarios"), {
            email,
            password
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
export const addPost = ({ username, location, bg }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield addDoc(collection(db, "posts"), {
            username,
            bg,
            location, user: "./img/ppp2.png",
            caption: "Wenas juanes",
            likes: 10,
            comments: 10,
            days: 2,
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
export const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = [];
        const querySnapshot = yield getDocs(collection(db, 'posts'));
        querySnapshot.forEach((post) => {
            posts.push(post.data());
            console.log(post);
        });
        return posts;
    }
    catch (error) {
        console.error(error);
        alert('Error!');
    }
});
export const listenposts = (cb) => {
    try {
        onSnapshot(collection(db, "posts"), (res) => {
            const posts = res.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
            cb(posts);
        });
    }
    catch (error) {
    }
};
