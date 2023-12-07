class ratingWidget extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        const heading = document.createElement('h2');
        heading.textContent = 'Ratings Widget';

        const star = document.createElement('span');
        star.innerHTML = '&star;'; 
        this.shadowRoot.appendChild(heading);
        this.shadowRoot.appendChild(star);

    }
}
window.customElements.define('rating-widget', ratingWidget)
