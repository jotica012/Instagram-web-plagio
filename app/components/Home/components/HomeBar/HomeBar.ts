export enum AttributeHomeBar{   
    "user" = "user",
}

class HomeBar extends HTMLElement {
    user?:string;
    
    static get observedAttribute(){
        const attrs: Record<AttributeHomeBar,null> = {
            user: null,
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
        const button = this.shadowRoot?.querySelector('newPost');
        button?.addEventListener('click', ()=>{
            const event: CustomEvent = new CustomEvent ('create-post', {
                composed: true
            });
            this.dispatchEvent(event);
            console.log('Click new post');
        });



    }
    attributeChangedCallback(
        propName: AttributeHomeBar, 
        oldValue: string | undefined, 
        newValue: string | undefined) {
        if(this[propName] === newValue) return;
        this[propName] = newValue;
        this.render();
    }
    render(){
        if (this.shadowRoot){
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