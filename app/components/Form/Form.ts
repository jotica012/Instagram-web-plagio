export class Form extends HTMLElement{
    email = "";
    password = "";

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click",()=>{
            const event: CustomEvent<{email:string, password: string}> = 
            new CustomEvent("form-fullfiled",{
                detail: {email: this.email, password: this.password},
                composed: true
            });

            this.dispatchEvent(event);
        });

        const emailInput = this.shadowRoot?.querySelector('input[type="email"]');
        const passwordInput = this.shadowRoot?.querySelector('input[type="password"]');
        
        emailInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.email = value;
        });

        passwordInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.password = value;
        })
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link href="./components/login.css"  rel="stylesheet">
        <form>
    <div class="field">
      <input autocomplete="off" id="logemail" placeholder="Email" class="input-field" name="logemail" type="email">
    </div>
    <div class="field">
      <input autocomplete="off" id="logpass" placeholder="Password" class="input-field" name="logpass" type="password">
    </div>
    <button class="btn" type="submit">Send</button>
    <a href="#" class="btn-link">Forgot your password?</a>
  </form>
</div>`
    }
}

customElements.define("app-form",Form);