class RatingWidget extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
				<style>
                    .colored  {
                        font-size: 2rem;
                        color: orange;
                    }
                </style>`;
        const heading = document.createElement('h2');
        heading.textContent = 'Ratings Widget';

        this.star1 = document.createElement('span');
        this.star1.innerHTML = '&star;'; 
        this.star1.id = 'star1';

        
        this.star2 = document.createElement('span');
        this.star2.innerHTML = '&star;'; 
        this.star2.id = 'star2';
         

        const star3 = document.createElement('span');
        star3.innerHTML = '&star;'; 
        star3.id = 'star3';  

        const star4 = document.createElement('span');
        star4.innerHTML = '&star;'; 
        star4.id = 'star4';
  
        const star5 = document.createElement('span');
        star5.innerHTML = '&star;'; 
        star5.id = 'star5';  
        star5.className = 'colored'; 
        this.shadowRoot.appendChild(heading);
        this.shadowRoot.appendChild(this.star1);
        this.shadowRoot.appendChild(this.star2);
        this.shadowRoot.appendChild(star3);
        this.shadowRoot.appendChild(star4);
        this.shadowRoot.appendChild(star5);

        this.star1.addEventListener('mouseover', () => this.onStarHoverOne());
        this.star2.addEventListener('mouseover', () => this.onStarHoverTwo());
    }
    onStarHoverOne() {
        this.star1.classList.add('colored');
        this.star2.classList.remove('colored');
        this.star3.classList.remove('colored');
        this.star4.classList.remove('colored');
        this.star5.classList.remove('colored');
    }
    onStarHoverTwo() {
        this.star1.classList.add('colored');
        this.star2.classList.add('colored');
        this.star3.classList.remove('colored');
        this.star4.classList.remove('colored');
        this.star5.classList.remove('colored');
    }
    
}
window.customElements.define('rating-widget', RatingWidget)
