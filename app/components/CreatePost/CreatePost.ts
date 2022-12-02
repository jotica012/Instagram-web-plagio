import { addPost } from "../../services/db.js";

export class Create extends HTMLElement {
username = "";
location = "";
bg = "";

constructor(){
    super();
    this.attachShadow({mode: 'open'});
}

connectedCallback(){
    this.render();
///NO ESTA ESCUCHANDO EL BOTON
    const button = this.shadowRoot?.querySelector('button');
    button?.addEventListener('Click', async () => {
        if(this.username && this.location && this.bg){
            const postData = {
                username: this.username,
                location: this.location,
                bg: this.bg
            } 
            try {
                await addPost(postData);
                alert("Post created!");
//FALTA PROBAR SI AL ACCIONAR ESTE EVENTO Screens.home
        const event: CustomEvent = 
            new CustomEvent("create-fullfilled", {composed: true});
            this.dispatchEvent(event);
        } 
        catch (error) {
            console.error(error);
            alert("An error occurred while creating the post");}
        } else {
            alert ("Fill in all the spaces");
        }

    });
    const usernameInput = this.shadowRoot?.querySelector('input[type="username"]');
    usernameInput?.addEventListener("change",(evt) => {
        const value: string = (evt.target as HTMLInputElement).value || "";
        this.username = value;
    });

    const locationInput = this.shadowRoot?.querySelector('input[type="location"]');
    locationInput?.addEventListener("change",(evt) => {
        const value: string = (evt.target as HTMLInputElement).value || "";
        this.location = value;
    })

    const bgInput = this.shadowRoot?.querySelector('input[type="bg"]');
    bgInput?.addEventListener("change",(evt) => {
        const value: string = (evt.target as HTMLInputElement).value || "";
        this.bg = value;
    }) 

}
render(){
    if(!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
 <link href="./components/CreatePost/CreatePost.css"  rel="stylesheet">
    <form>
    <div class = "card">
    <img src="img/logo.png" height="50" alt="iglogo" class="logo">
<div class="field">
  <input autocomplete="off" id="logusername" placeholder="Username" class="input-field" name="logusername" type="username">
</div>
<div class="field">
  <input autocomplete="off" id="loglocation" placeholder="Location" class="input-field" name="loglocation" type="location">
</div>
<div class="field">
  <input autocomplete="off" id="logpic" placeholder="Picture URL" class="input-field" name="logpic" type="bg">
</div>
<button class="btn" type="submit">Create Post</button>
</form>
</div>
 `
}

}

customElements.define("app-create", Create);