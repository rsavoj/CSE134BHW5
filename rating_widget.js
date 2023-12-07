class ratingWidget extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        const heading = document.createElement('h2');
        heading.textContent = 'Ratings Widget';

        const star1 = document.createElement('span');
        star.innerHTML = '&star;'; 
        heartSpan.id = 'star1';
        
        const star2 = document.createElement('span');
        star.innerHTML = '&star;'; 
        heartSpan.id = 'star2';  

        const star3 = document.createElement('span');
        star.innerHTML = '&star;'; 
        heartSpan.id = 'star3';  
        const star4 = document.createElement('span');
        star.innerHTML = '&star;'; 
        heartSpan.id = 'star4';  
        const star5 = document.createElement('span');
        star.innerHTML = '&star;'; 
        heartSpan.id = 'star5';  

      
        this.shadowRoot.appendChild(heading);
        this.shadowRoot.appendChild(star1);
        this.shadowRoot.appendChild(star2);
        this.shadowRoot.appendChild(star3);
        this.shadowRoot.appendChild(star4);
        this.shadowRoot.appendChild(star5);

    }
}
window.customElements.define('rating-widget', ratingWidget)
