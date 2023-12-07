class ratingWidget extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
       

    }
}
window.customElements.define('rating-widget', ratingWidget)
