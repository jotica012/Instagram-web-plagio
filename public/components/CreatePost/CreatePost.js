var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addPost } from "../../services/db.js";
export class Create extends HTMLElement {
    constructor() {
        super();
        this.username = "";
        this.location = "";
        this.bg = "";
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b, _c, _d;
        this.render();
        ///NO ESTA ESCUCHANDO EL BOTON
        const button = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('button');
        button === null || button === void 0 ? void 0 : button.addEventListener('Click', () => __awaiter(this, void 0, void 0, function* () {
            if (this.username && this.location && this.bg) {
                const postData = {
                    username: this.username,
                    location: this.location,
                    bg: this.bg
                };
                try {
                    yield addPost(postData);
                    alert("Post created!");
                    //FALTA PROBAR SI AL ACCIONAR ESTE EVENTO Screens.home
                    const event = new CustomEvent("create-fullfilled", { composed: true });
                    this.dispatchEvent(event);
                }
                catch (error) {
                    console.error(error);
                    alert("An error occurred while creating the post");
                }
            }
            else {
                alert("Fill in all the spaces");
            }
        }));
        const usernameInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('input[type="username"]');
        usernameInput === null || usernameInput === void 0 ? void 0 : usernameInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.username = value;
        });
        const locationInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('input[type="location"]');
        locationInput === null || locationInput === void 0 ? void 0 : locationInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.location = value;
        });
        const bgInput = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('input[type="bg"]');
        bgInput === null || bgInput === void 0 ? void 0 : bgInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.bg = value;
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
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
 `;
    }
}
customElements.define("app-create", Create);
