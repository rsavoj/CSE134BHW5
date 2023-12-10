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
            <input type="hidden" name="sentBy" value="HTML">
            <input type="hidden" id="rating" name="rating" min="1" max="5" value="0" required>
        </form>  
        <output id=ratingResponce></output>
        <style>
            .colored  {
                font-size: 2rem;
                color: orange;
            }
            .submited {
                visibility: hidden;
            }
            .output{
                font-size: 3rem;

            }
        </style>`;
  

        this.star1 = document.createElement('span');
        this.star1.innerHTML = '&star;'; 
        this.star1.id = 'star1';
        this.star1.className = 'stars'; 


        this.star2 = document.createElement('span');
        this.star2.innerHTML = '&star;'; 
        this.star2.id = 'star2';
        this.star2.className = 'stars'; 


        this.star3 = document.createElement('span');
        this.star3.innerHTML = '&star;'; 
        this.star3.id = 'star3';  
        this.star3.className = 'stars'; 

        this.star4 = document.createElement('span');
        this.star4.innerHTML = '&star;'; 
        this.star4.id = 'star4';
        this.star4.className = 'stars'; 

        this.star5 = document.createElement('span');
        this.star5.innerHTML = '&star;'; 
        this.star5.id = 'star5';  
        this.star5.className = 'stars'; 
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
        this.star1.addEventListener('click', () => this.onStarClick());
        this.star2.addEventListener('click', () => this.onStarClick());
        this.star3.addEventListener('click', () => this.onStarClick());
        this.star4.addEventListener('click', () => this.onStarClick());
        this.star5.addEventListener('click', () => this.onStarClick());
        
   }
    onStarClick(){
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
        
        //this.star1.removeEventListener('click', this.onStarClick);
       // this.star2.removeEventListener('click', this.onStarClick);
       // this.star3.removeEventListener('click', this.onStarClick);
       // this.star4.removeEventListener('click', this.onStarClick);
       // this.star5.removeEventListener('click', this.onStarClick);

    }
    sendRequest(){
        
        const formPressed = this.shadowRoot.getElementById('form1');
        let formData = new FormData(formPressed );
        
        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://httpbin.org/post', true);
        xhr.setRequestHeader('Content-Type',  'application/x-www-form-urlencoded');
        xhr.setRequestHeader('X-Sent-By', 'JS');
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
        xhr.send(formData);
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
        console.log(3);
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
