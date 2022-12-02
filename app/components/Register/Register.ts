import { addUser } from "../../services/db.js";

export class Register extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;

            addUser({email,password}).then(value => {
                if (value) {
                    const event: CustomEvent = new CustomEvent ("register-completed", {
                        composed: true
                    })
                    console.log(this);

                    this.dispatchEvent (event);
                }else{
                    alert("This user has already been created");
                }
            });
        })
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link href="./components/register.css"  rel="stylesheet">
        <section>
        <div class = "card">
        <img src= "./img/logo.png" alt="Instagram Logo" class = "logo"> 
        <h3 class = "title"> Register to see photos and videos from your friends </h3>
            <app-form></app-form>
            
         </section>
         <img src="img/fblogin.png" height="50" alt="Facebook login button" class="fb">
         <img src="img/app.png" height="95" alt="Download the apps button" class="apps">
         <img src="img/footer.png" height="95" alt="Footer terms and conditions" class="footer">
         </div>



        `
    }
}

customElements.define("app-register",Register);