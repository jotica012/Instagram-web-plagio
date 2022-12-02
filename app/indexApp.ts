import "./components/indexComponents.js";
import { getPosts, listenposts } from "./services/db.js";
enum Screens {
    login,
    register,
    home,
    create
}


class AppContainer extends HTMLElement{
    screen: Screens = Screens.home;

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        const login = this.shadowRoot?.querySelector("app-login");
        login?.addEventListener("login-success", ()=>{
            this.screen = Screens.login;
            this.render();
        })

        const register = this.shadowRoot?.querySelector("app-register");
        register?.addEventListener("register-completed", () => {
            this.screen = Screens.login;
            this.render();

            const login = this.shadowRoot?.querySelector("app-login");
        login?.addEventListener("login-success", ()=>{
            this.screen = Screens.home;
            this.render();
        })
        });

        const createPost = this.shadowRoot?.querySelector("my-homebar");
        createPost?.addEventListener("create-fullfilled", () => {
            this.screen = Screens.create;
            this.render();
        });

        const reloadPost = this.shadowRoot?.querySelector("my-homebar");
        reloadPost?.addEventListener("create-fullfilled", () => {
            this.screen = Screens.home;
            this.render();
        });


      


        /// CREAR EL BOTON DE CREAR POST QUE LLEVE A Screens.create 
    }

    render(){
        if(!this.shadowRoot) return;
        ///CREO QUE AQUI VA EL .MAP PARA QUE NO SE TRAIAGN TODOS LOS POSTS DUPLICADOS 


        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = "<app-home></app-home>"
                break;
        
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>"
            break;
            
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>"
            break;

            case Screens.create:
                this.shadowRoot.innerHTML = "<app-create></app-create>"
            break;

            default:
                break;
        }
    }
}

customElements.define("app-container",AppContainer);