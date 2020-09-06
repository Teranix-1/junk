class Header extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = ` 
        <style>
        .logo-bar{
            width: 220px;
        }

        @media screen and (max-width: 768px){
        }
        @media screen and (max-width: 576px){
        }
        </style>
        <div class="logo">
         <img class="logo-bar" src="./img/logo.png">
        </div>`;
    }

}

customElements.define("header-bar", Header);