class ratingWidget extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        const heading = document.createElement('h2');
        heading.textContent = 'Ratings Widget';

        const star1 = document.createElement('span');
        star1.innerHTML = '&star;'; 
        star1.id = 'star1';
        star1.class = 'notColored'; 
        
        const star2 = document.createElement('span');
        star2.innerHTML = '&star;'; 
        star2.id = 'star2';
        star2.class = 'notColored';  

        const star3 = document.createElement('span');
        star3.innerHTML = '&star;'; 
        star3.id = 'star3';  
        star3.class = 'notColored'; 
        const star4 = document.createElement('span');
        star4.innerHTML = '&star;'; 
        star4.id = 'star4';
        star4.class = 'notColored';   
        const star5 = document.createElement('span');
        star5.innerHTML = '&star;'; 
        star5.id = 'star5';  
        star1.class = 'notColored'; 
        this.shadowRoot.appendChild(heading);
        this.shadowRoot.appendChild(star1);
        this.shadowRoot.appendChild(star2);
        this.shadowRoot.appendChild(star3);
        this.shadowRoot.appendChild(star4);
        this.shadowRoot.appendChild(star5);

    }
}
window.customElements.define('rating-widget', ratingWidget)
