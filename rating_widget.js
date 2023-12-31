class RatingWidget extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
       
    }
  
    //This should not go in constructor interferes with dom manipulation
   //action="http://httpbin.org/post" method ="post"
    connectedCallback(){
    this.shadowRoot.innerHTML = `
        <h2>Ratings Widget</h2>
        <form id=form1>
            <label for="rating">How satisfied are you feeling?</label>
            <input type="hidden" name="question" value="How satisfied are you?">
            <input type="hidden" id="sentBy" name="sentBy" value="HTML">
            <input type="hidden" id="rating" name="rating" min="1" max="5" value="0" required>
        </form>  
        <output id=ratingResponce></output>
        <span id="star1" class="stars">&star;</span>
        <span id="star2" class="stars">&star; </span>
        <span id="star3" class="stars">&star;</span>
        <span id="star4" class="stars">&star;</span>
        <span id="star5" class="stars">&star;</span>
        <style>
            label {
                font-size: 2rem;
            }
            .colored  {
                color: orange;
            }
            .stars{
                font-size: 2rem;
            }
            .submited {
                visibility: hidden;
            }
            output {
                font-size: 1.5rem;
            }
        </style>`;
  

        this.star1 = this.shadowRoot.getElementById('star1');
        this.star2 = this.shadowRoot.getElementById('star2');
        this.star3 = this.shadowRoot.getElementById('star3');
        this.star4 = this.shadowRoot.getElementById('star4');
        this.star5 = this.shadowRoot.getElementById('star5');
        this.star1.addEventListener('mouseover', () => this.onStarHoverOne());
        this.star2.addEventListener('mouseover', () => this.onStarHoverTwo());
        this.star3.addEventListener('mouseover', () => this.onStarHoverThree());
        this.star4.addEventListener('mouseover', () => this.onStarHoverFour());
        this.star5.addEventListener('mouseover', () => this.onStarHoverFive());
        this.star1.addEventListener('click', () => this.onStarClick());
        this.star2.addEventListener('click', () => this.onStarClick());
        this.star3.addEventListener('click', () => this.onStarClick());
        this.star4.addEventListener('click', () => this.onStarClick());
        this.star5.addEventListener('click', () => this.onStarClick());
        
   }
    onStarClick(){
        const ratingInput = this.shadowRoot.getElementById('sentBy');
        ratingInput.value = "JS";
        this.sendRequest();
        this.updateScreen();
    }
    updateScreen(){
        let coloredStars = this.shadowRoot.querySelectorAll('.stars');
        console.log(coloredStars);
        for (const star of coloredStars){
            console.log('star');
            star.classList.add('submited');
        }
        let rating =  this.shadowRoot.getElementById('rating').value
        let message = this.shadowRoot.getElementById('ratingResponce')
        if(parseInt(rating) > 3 ){
            message.textContent = `Thanks for the ${rating} star rating`
        }else{
            message.textContent = `Thanks for the feedback of ${rating} we will do better`
        }
        
        this.star1.removeEventListener('click', this.onStarClick);
        this.star2.removeEventListener('click', this.onStarClick);
        this.star3.removeEventListener('click', this.onStarClick);
        this.star4.removeEventListener('click', this.onStarClick);
        this.star5.removeEventListener('click', this.onStarClick);
        this.star1.removeEventListener('mouseover', this.onStarHoverOne);
        this.star2.removeEventListener('mouseover', this.onStarHoverTwo);
        this.star3.removeEventListener('mouseover', this.onStarHoverThree);
        this.star4.removeEventListener('mouseover', this.onStarHoverFour);
        this.star5.removeEventListener('mouseover', this.onStarHoverFive);

    }
    sendRequest(){
        
        const formPressed = this.shadowRoot.getElementById('form1');
        let formData = new FormData(formPressed );
        
        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://httpbin.org/post', true);
        xhr.setRequestHeader('Content-Type',  'application/x-www-form-urlencoded');
        xhr.setRequestHeader('X-Sent-By', 'JS');
        const urlEncodedData = new URLSearchParams(formData).toString();
        xhr.onload = function()
        {
            if(xhr.status === 200){
                console.log(xhr.responseText);
                console.log(xhr.body)
            }else{
                console.error('Error:', xhr.statusText)
            }
        
        };
        xhr.onerror = function(){
            console.error('Network Error'); 
        }
        xhr.send(urlEncodedData);
    }
  
    onStarHoverOne() {
        this.star1.classList.add('colored');
        this.star2.classList.remove('colored');
        this.star3.classList.remove('colored');
        this.star4.classList.remove('colored');
        this.star5.classList.remove('colored');
        const ratingInput = this.shadowRoot.getElementById('rating');
        ratingInput.value = 2;
       // ratingInput.value = 1;
    }
    onStarHoverTwo() {
        this.star1.classList.add('colored');
        this.star2.classList.add('colored');
        this.star3.classList.remove('colored');
        this.star4.classList.remove('colored');
        this.star5.classList.remove('colored');
        const ratingInput = this.shadowRoot.getElementById('rating');
        ratingInput.value = 2;
    }
    onStarHoverThree() {
        this.star1.classList.add('colored');
        this.star2.classList.add('colored');
        this.star3.classList.add('colored');
        this.star4.classList.remove('colored');
        this.star5.classList.remove('colored');
        const ratingInput = this.shadowRoot.getElementById('rating');
        ratingInput.value = 3;
 
    }
    onStarHoverFour() {
        this.star1.classList.add('colored');
        this.star2.classList.add('colored');
        this.star3.classList.add('colored');
        this.star4.classList.add('colored');
        this.star5.classList.remove('colored');
        const ratingInput = this.shadowRoot.getElementById('rating');
        ratingInput.value = 4;
    }
    onStarHoverFive() {
        this.star1.classList.add('colored');
        this.star2.classList.add('colored');
        this.star3.classList.add('colored');
        this.star4.classList.add('colored');
        this.star5.classList.add('colored');
        const ratingInput = this.shadowRoot.getElementById('rating');
        ratingInput.value = 5;
    }
    
      
}
window.customElements.define('rating-widget', RatingWidget)
