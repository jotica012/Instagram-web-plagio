var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dataS from "../../dataStories.js";
import { Attribute } from "./components/Profile/Profile.js";
import { AttributeStories } from "./components/StoriesIG/StoriesIG.js";
import { AttributeSuggestions } from "./components/Suggestions/suggestions.js";
import data from "./data.js";
import { getPosts } from "../../services/db.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.homebar = [];
        this.profiles = [];
        this.stories = [];
        this.suggestions = [];
        this.attachShadow({ mode: 'open' });
        const topbar = this.ownerDocument.createElement("my-homebar");
        this.homebar.push(topbar);
        dataS.forEach((story) => {
            const stories = this.ownerDocument.createElement("stories-ig");
            stories.setAttribute(AttributeStories.user, story.user);
            stories.setAttribute(AttributeStories.pic, story.pic);
            stories.addEventListener("click", () => console.log(story));
            this.stories.push(stories);
        });
        data.forEach((suggestions) => {
            const suggestionsCard = this.ownerDocument.createElement("my-suggestions");
            suggestionsCard.setAttribute(AttributeSuggestions.username, suggestions.username);
            suggestionsCard.setAttribute(AttributeSuggestions.pic, suggestions.pic);
            suggestionsCard.setAttribute(AttributeSuggestions.peopleFollowed, suggestions.peopleFollowed);
            suggestionsCard.addEventListener("click", () => console.log(suggestions));
            this.suggestions.push(suggestionsCard);
        });
    }
    ;
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield getPosts();
                /*const posts = listenposts((posts)=> {
                    this.render()
                })*/
                posts === null || posts === void 0 ? void 0 : posts.forEach(({ user, username, location, caption, likes, comments, days, bg, }) => {
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
                    const profileCard = this.ownerDocument.createElement("my-profile");
                    profileCard.setAttribute(Attribute.user, user);
                    profileCard.setAttribute(Attribute.username, username);
                    profileCard.setAttribute(Attribute.location, location);
                    profileCard.setAttribute(Attribute.caption, caption);
                    profileCard.setAttribute(Attribute.likes, String(likes));
                    profileCard.setAttribute(Attribute.comments, String(comments));
                    profileCard.setAttribute(Attribute.days, String(days));
                    profileCard.setAttribute(Attribute.bg, bg);
                    profileCard.addEventListener("click", () => console.log(posts));
                    this.profiles.push(profileCard);
                });
                this.render();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<my-homebar></my-homebar>`;
            this.stories.forEach((stories) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(stories);
            });
            this.profiles.forEach((profiles) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profiles);
            });
            this.suggestions.forEach((suggestions) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(suggestions);
            });
            this.homebar.forEach((homebar) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(homebar);
            });
        }
    }
}
customElements.define("app-home", Home);
