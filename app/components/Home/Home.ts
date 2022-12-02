import dataS from "../../dataStories.js";
import HomeBar from "./components/HomeBar/HomeBar.js";
import MyProfile, { Attribute } from "./components/Profile/Profile.js";
import StoriesIG, {AttributeStories} from "./components/StoriesIG/StoriesIG.js";
import Suggestions, {AttributeSuggestions} from "./components/Suggestions/suggestions.js";
import data from "./data.js";
import { getPosts, listenposts } from "../../services/db.js";

export class Home extends HTMLElement {
    homebar: HomeBar [] = [];
    profiles: MyProfile [] = [];
    stories: StoriesIG [] = [];
    suggestions: Suggestions [] = [];
    

    constructor(){
        super ();
        this.attachShadow({mode: 'open'});

        const topbar = this.ownerDocument.createElement ("my-homebar") as HomeBar;
        this.homebar.push(topbar);

        dataS.forEach((story) => {
            const stories = this.ownerDocument.createElement("stories-ig") as StoriesIG;
            stories.setAttribute(AttributeStories.user, story.user); 
            stories.setAttribute(AttributeStories.pic, story.pic); 
           
            stories.addEventListener("click", () => console.log(story));
            this.stories.push(stories);
        });
        
        data.forEach((suggestions) => {
            const suggestionsCard = this.ownerDocument.createElement("my-suggestions") as Suggestions;
            suggestionsCard.setAttribute(AttributeSuggestions.username, suggestions.username); 
            suggestionsCard.setAttribute(AttributeSuggestions.pic, suggestions.pic); 
            suggestionsCard.setAttribute(AttributeSuggestions.peopleFollowed, suggestions.peopleFollowed); 
    
            suggestionsCard.addEventListener("click", () => console.log(suggestions));
            this.suggestions.push(suggestionsCard);
        });

    };
    async connectedCallback(){
        try {
            const posts = await getPosts();
            /*const posts = listenposts((posts)=> {
                this.render()
            })*/

            posts?.forEach(({
                user,
                username,
                location,
                caption,
                likes,
                comments,
                days,
                bg,
            }) => {
                console.log({
                user,
                username,
                location,
                caption,
                likes,
                comments,
                days,
                bg,
                });
                const profileCard = this.ownerDocument.createElement("my-profile") as MyProfile;
            profileCard.setAttribute(Attribute.user, user ); 
            profileCard.setAttribute(Attribute.username, username); 
            profileCard.setAttribute(Attribute.location, location); 
            profileCard.setAttribute(Attribute.caption, caption); 
            profileCard.setAttribute(Attribute.likes, String(likes)); 
            profileCard.setAttribute(Attribute.comments, String (comments)); 
            profileCard.setAttribute(Attribute.days, String (days));
            profileCard.setAttribute(Attribute.bg,bg); 
           
            profileCard.addEventListener("click", () => console.log(posts));
            this.profiles.push(profileCard);
            });
            this.render();
        }   catch(error) {
            console.error(error);
        } 
    }
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `<my-homebar></my-homebar>`;
            this.stories.forEach((stories)=> {
                this.shadowRoot?.appendChild(stories);
            });
            this.profiles.forEach((profiles)=> {
                this.shadowRoot?.appendChild(profiles);
            });
            this.suggestions.forEach((suggestions)=> {
                this.shadowRoot?.appendChild(suggestions);
            });
            this.homebar.forEach((homebar)=> {
                this.shadowRoot?.appendChild(homebar);
            });
            
        }
    }
   
}

customElements.define("app-home", Home);

