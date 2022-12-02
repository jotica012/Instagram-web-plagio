export enum Attribute {
    "user" = "user",
    "username" = "username",
    "location" = "location",
    "caption" = "caption",
    "likes" = "likes",
    "comments" = "comments",
    "days" = "days",
    "bg" = "bg"
}

class MyProfile  extends HTMLElement {
    user?: string;
    username?: string;
    location?: string;
    caption?: string;
    likes?: number;
    comments?: number;
    days?: number;
    bg?: string;



    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            user: null,
            username: null,
            location: null,
            caption: null,
            likes: null,
            comments: null,
            days: null,
            bg: null

        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute, 
        oldValue: string | undefined, 
        newValue: string | undefined) {
            switch (propName) {
                case Attribute.likes:
                    this.likes = newValue ? Number (newValue) : undefined;
                    break;
                case Attribute.comments:
                    this.comments = newValue ? Number (newValue) : undefined;
                    break;
                case Attribute.days:
                    this.days = newValue ? Number (newValue) : undefined;
                    break;
                default:
                    this[propName] = newValue; 
                    break;
            }
            this.render();
    }
   
   // ${this.location} ${this.caption} ${this.likes} ${this.comments}${this.days} ${this.bg}
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            
        <link href="./components/website.css" rel="stylesheet">
        <link rel="stylesheet" href="./components/website.css">
       
        <section class="polaroid">
        
        <img src = ${this.user} alt = "Profile picture for user" class="user">
        <img src = "img/options.png"  alt = "Options menu" class="dots">
        
        <p class="title">
        <b>${this.username}</b> 
        <br>
        ${this.location}
        <br>
        </p>
        <br>
        <img src = ${this.bg} alt = "Post picture" class="bg">
        
        <br>
        <img src = "img/likevar.png" alt = "Like button" class="heart">
        <img src = "img/comment.png" alt = "Comment button" class="chat">
        <img src = "img/send.png" alt = "Send button" class="send">
        
        <img src = "img/save.png" alt = "Save Button" class="save">
        <br>
        
        <p class="bottomsection"> 
        <b> ${this.likes} likes </b>
        <br>
        <b> ${this.username} </b> ${this.caption}
        </p>
        <p class="comment"> 
        <b>  View all ${this.comments} comments </b>
        </p>
        <p class="date"> 
        ${this.days} days ago 
        </p> 
        </section>
    
        `;
        }
    }

}
customElements.define("my-profile", MyProfile);
export default MyProfile;