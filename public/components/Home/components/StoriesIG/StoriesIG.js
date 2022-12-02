export var AttributeStories;
(function (AttributeStories) {
    AttributeStories["user"] = "user";
    AttributeStories["pic"] = "pic";
})(AttributeStories || (AttributeStories = {}));
class StoriesIG extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            user: null,
            pic: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        if (this[propName] === newValue)
            return;
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            
            <link href="./components/Home/components/StoriesIG/StoriesIG.css" rel="stylesheet">

            <section class = "box">  </section>

            <section>
                <img class = "imagen1" src = "./img/ppp1H.png" alt="Story of Jotica012" ></img> 
                <h2 class = "username1">Jotica012</h2>

                <img class = "imagen2" src = "./img/ppp2H.png" alt="Story of larubia inmoral" ></img> 
                <h2 class = "username2">larubiainmoral</h2>

                <img class = "imagen3" src = "./img/ppp3H.png" alt="Story of Mjota22" ></img> 
                <h2 class = "username3">Mjota22</h2>

                <img class = "imagen4" src = "./img/ppp4H.png" alt="Story Anamamos" ></img> 
                <h2 class = "username4">Anamamos</h2>
          </section>

            `;
        }
    }
}
customElements.define("stories-ig", StoriesIG);
export default StoriesIG;
