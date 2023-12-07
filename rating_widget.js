class RatingWidget extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
				<style>
                    .colored {
                        font-size: 5rem;
                        color: red;
                    }
                    .notColored {
                        font-size: 2rem;
                        color: orange;
                    }
                </style>`;
        const heading = document.createElement('h2');
        heading.textContent = 'Ratings Widget';

        this.star1 = document.createElement('span');
        this.star1.innerHTML = '&star;'; 
        this.star1.id = 'star1';
        this.star1.className = 'notColored'; 
        
        const star2 = document.createElement('span');
        star2.innerHTML = '&star;'; 
        star2.id = 'star2';
        star2.className = 'notColored';  

        const star3 = document.createElement('span');
        star3.innerHTML = '&star;'; 
        star3.id = 'star3';  
        star3.className = 'notColored'; 
        const star4 = document.createElement('span');
        star4.innerHTML = '&star;'; 
        star4.id = 'star4';
        star4.className = 'notColored';   
        const star5 = document.createElement('span');
        star5.innerHTML = '&star;'; 
        star5.id = 'star5';  
        star5.className = 'colored'; 
        this.shadowRoot.appendChild(heading);
        this.shadowRoot.appendChild(this.star1);
        this.shadowRoot.appendChild(star2);
        this.shadowRoot.appendChild(star3);
        this.shadowRoot.appendChild(star4);
        this.shadowRoot.appendChild(star5);

        this.star1.addEventListener('mouseover', () => this.onStarHoverOne());
    }
    onStarHoverOne() {
        this.star1.classList.add('colored');
        //this.star1.classList.remove('notcolored');
       // this.star2.classList.add('notcolored');
        //this.star3.classList.add('notcolored');
        //this.star4.classList.add('notcolored');
        //this.star5.classList.add('notcolored');
    }
    
}
window.customElements.define('rating-widget', RatingWidget)
