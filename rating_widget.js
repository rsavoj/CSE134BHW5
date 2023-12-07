class RatingWidget extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
                <form action="http://httpbin.org/post" method ="post">
                    <label for="rating">How satisfied are you feeling?</label>
                    <input type="hidden" name="question" value="How satisfied are you?">
                    <input type="hidden" name="sentBy" value="HTML">
                    <input type="number" id="rating" name="rating" min="1" max="5" value="0" required>
                    <button type="submit">Submit</button>

                </form>  
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
         

        this.star3 = document.createElement('span');
        this.star3.innerHTML = '&star;'; 
        this.star3.id = 'star3';  

        this.star4 = document.createElement('span');
        this.star4.innerHTML = '&star;'; 
        this.star4.id = 'star4';
  
        this.star5 = document.createElement('span');
        this.star5.innerHTML = '&star;'; 
        this.star5.id = 'star5';  
        this.star5.className = 'colored'; 
        this.shadowRoot.appendChild(heading);
        this.shadowRoot.appendChild(this.star1);
        this.shadowRoot.appendChild(this.star2);
        this.shadowRoot.appendChild(this.star3);
        this.shadowRoot.appendChild(this.star4);
        this.shadowRoot.appendChild(this.star5);

        this.star1.addEventListener('mouseover', () => this.onStarHoverOne());
        this.star2.addEventListener('mouseover', () => this.onStarHoverTwo());
        this.star3.addEventListener('mouseover', () => this.onStarHoverThree());
        this.star4.addEventListener('mouseover', () => this.onStarHoverFour());
        this.star5.addEventListener('mouseover', () => this.onStarHoverFive());
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
    onStarHoverThree() {
        this.star1.classList.add('colored');
        this.star2.classList.add('colored');
        this.star3.classList.add('colored');
        this.star4.classList.remove('colored');
        this.star5.classList.remove('colored');
    }
    onStarHoverFour() {
        this.star1.classList.add('colored');
        this.star2.classList.add('colored');
        this.star3.classList.add('colored');
        this.star4.classList.add('colored');
        this.star5.classList.remove('colored');
    }
    onStarHoverFive() {
        this.star1.classList.add('colored');
        this.star2.classList.add('colored');
        this.star3.classList.add('colored');
        this.star4.classList.add('colored');
        this.star5.classList.add('colored');
    }
    
}
window.customElements.define('rating-widget', RatingWidget)
