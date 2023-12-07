class ratingWidget extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = '<h2>Ratings Widget</h2>'

    }
}
window.customElements.define('rating-widget', ratingWidget)
