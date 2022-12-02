import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true
                    });
                    console.log(this);
                    this.dispatchEvent(event);
                }
                else {
                    alert("Las credenciales no coinciden");
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link href="./components/login.css"  rel="stylesheet">

        <section>
        <div class="card">
        <img src="img/logo.png" height="50" alt="Instagram logo" class="logo">
        <section class = "form">
            <app-form></app-form>
        </section>
        <img src="img/fblogin.png" height="50" alt="Log in with facebook button" class="fb">
        </div>
        <img src="img/iglogin.png" height="650" alt="Picture of phones with instagram open" class="iglogin">
        <img src="img/app.png" height="95" alt="Download the apps button" class="apps">
        <img src="img/footer.png" height="95" alt="Footer terms and conditions" class="footer">



        `;
    }
}
customElements.define("app-login", Login);
