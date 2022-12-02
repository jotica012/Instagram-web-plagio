export var AttributeHomeBar;
(function (AttributeHomeBar) {
    AttributeHomeBar["user"] = "user";
})(AttributeHomeBar || (AttributeHomeBar = {}));
class HomeBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttribute() {
        const attrs = {
            user: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        var _a;
        this.render();
        const button = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('newPost');
        button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
            const event = new CustomEvent('create-post', {
                composed: true
            });
            this.dispatchEvent(event);
            console.log('Click new post');
        });
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
            <link rel="stylesheet" href="./components/Home/components/HomeBar/HomeBar.css">
            <section>
            <img src="img/homebar.png" class="sidebar" alt="Side home bar">
            </section>
            `;
        }
    }
}
customElements.define("my-homebar", HomeBar);
export default HomeBar;
