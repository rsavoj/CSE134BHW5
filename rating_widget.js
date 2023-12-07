class ratingWidget extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        heading='<h2>Ratings Widget</h2>'
        star='<p> &star </p>'
        this.shadowRoot.appendChild(heading);
        this.shadowRoot.appendChild(star);

    }
}
window.customElements.define('rating-widget', ratingWidget)
