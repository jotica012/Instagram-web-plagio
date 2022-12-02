export var AttributeSuggestions;
(function (AttributeSuggestions) {
    AttributeSuggestions["username"] = "username";
    AttributeSuggestions["pic"] = "pic";
    AttributeSuggestions["peopleFollowed"] = "peopleFollowed";
})(AttributeSuggestions || (AttributeSuggestions = {}));
class Suggestions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttribute() {
        const attrs = {
            username: null,
            pic: null,
            peopleFollowed: null
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
            <link href="./components/Home/components/Suggestions/Suggestions.css"  rel="stylesheet">
            
            <p class="myprofileinformation">
            <br> <b>${this.username}</b><br>
           </p>
           <p class="myprofileinformation1">
           <br> <b>Jotica012</b><br>
          </p>
                <div class = "pp">
                    <img src= "img/minipp.png" alt="Profile Picture"> 
                    <p class="ppinformation"> 
                    Majo </p>

                <p class="suggest">
                <br> <b>Suggestions for you </b> </br>
            </p>
            <p class="suggest1">
             See all 
            </p>

            <p class="suggest2">
             Change
            </p>

            <p class="follow">
             Follow
            </p>

            <p class="follow2">
            Follow
            </p>

            <p class="follow3">
            Follow
            </p>
        
            <p class="follow4">
            Follow
            </p>
            
            <p class="follow5">
            Follow
            </p>

            <p class="follow6">
            Follow
           </p>

            <p class="card1">
           <br> <b>Rossycecilia</b> <br> </p>
                <div class = "pp1">
                <img src= "img/pp1.png" alt="Profile Picture"> 
                <p class="ppinformation1"> 
                    Sugestions for you </p>

              <p class="card2">
           <br> <b>Falyriam</b> <br> </p>
                <div class = "pp2">
                <img src= "img/pp2.png" alt="Profile Picture"> 
                <p class="ppinformation2"> 
                    Sugestions for you </p>

         <p class="card3">
           <br> <b>Daniela_6947</b> <br> </p>
                <div class = "pp3">
                <img src= "img/pp3.png" alt="Profile Picture"> 
                <p class="ppinformation3"> 
                    Sugestions for you </p>

       <p class="card4">
           <br> <b>Dankiatzu</b> <br> </p>
                <div class = "pp4">
                <img src= "img/pp4.png" alt="Profile Picture"> 
                <p class="ppinformation4"> 
                    Sugestions for you </p>              
            </section>

            <p class="card5">
            <br> <b>Moz_rodriguez</b> <br> </p>
                 <div class = "pp5">
                 <img src= "img/pp5.png" alt="Profile Picture"> 
                 <p class="ppinformation5"> 
                     Sugestions for you </p>              
             </section>

             <p class="card6">
             <br> <b>Anaag256</b> <br> </p>
                  <div class = "pp6">
                  <img src= "img/pp6.png" alt="Profile Picture"> 
                  <p class="ppinformation6"> 
                      Sugestions for you </p>              
              </section>


            <section>
            <img src="img/homebar.png" class="sidebar" alt="Side home bar">
            </section>


            `;
        }
    }
}
customElements.define("my-suggestions", Suggestions);
export default Suggestions;
