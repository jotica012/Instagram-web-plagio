import "./components/indexComponents.js";
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["register"] = 1] = "register";
    Screens[Screens["home"] = 2] = "home";
    Screens[Screens["create"] = 3] = "create";
})(Screens || (Screens = {}));
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.home;
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b, _c, _d;
        this.render();
        const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-login");
        login === null || login === void 0 ? void 0 : login.addEventListener("login-success", () => {
            this.screen = Screens.login;
            this.render();
        });
        const register = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("app-register");
        register === null || register === void 0 ? void 0 : register.addEventListener("register-completed", () => {
            var _a;
            this.screen = Screens.login;
            this.render();
            const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-login");
            login === null || login === void 0 ? void 0 : login.addEventListener("login-success", () => {
                this.screen = Screens.home;
                this.render();
            });
        });
        const createPost = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("my-homebar");
        createPost === null || createPost === void 0 ? void 0 : createPost.addEventListener("create-fullfilled", () => {
            this.screen = Screens.create;
            this.render();
        });
        const reloadPost = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector("my-homebar");
        reloadPost === null || reloadPost === void 0 ? void 0 : reloadPost.addEventListener("create-fullfilled", () => {
            this.screen = Screens.home;
            this.render();
        });
        /// CREAR EL BOTON DE CREAR POST QUE LLEVE A Screens.create 
    }
    render() {
        if (!this.shadowRoot)
            return;
        ///CREO QUE AQUI VA EL .MAP PARA QUE NO SE TRAIAGN TODOS LOS POSTS DUPLICADOS 
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = "<app-home></app-home>";
                break;
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>";
                break;
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>";
                break;
            case Screens.create:
                this.shadowRoot.innerHTML = "<app-create></app-create>";
                break;
            default:
                break;
        }
    }
}
customElements.define("app-container", AppContainer);
