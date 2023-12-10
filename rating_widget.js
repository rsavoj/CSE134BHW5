class RatingWidget extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
                <form id=form1 action="http://httpbin.org/post" method ="post">
                    <label for="rating">How satisfied are you feeling?</label>
                    <input type="hidden" name="question" value="How satisfied are you?">
               
                    <input type="hidden" name="sentBy" value="HTML">
                    
                    <input type="hidden" id="rating" name="rating" min="1" max="5" value="0" required>
               
                    

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
        this.star1.addEventListener('click', () => this.onStarClick());
        this.star2.addEventListener('click', () => this.onStarClick());
        this.star3.addEventListener('click', () => this.onStarClick());
        this.star4.addEventListener('click', () => this.onStarClick());
        this.star5.addEventListener('click', () => this.onStarClick());
    }
  
   
    onStarClick(){
        
        
        this.sendRequest();
        //formPressed.submit();
    }
    sendRequest(){
        let xhr = new XMLHttpRequest();
        const formPressed = this.shadowRoot.getElementById('form1');
    
         let testData = JSON.stringify({
            name: "John",
            surname: "Smith"
          });
        // method target async
        // "https://eo8cvd1lrbou093.m.pipedream.net"
        xhr.open("POST", './example.xml', true)

        xhr.setRequestHeader('Content-Type',  'application/json; charset=utf-8');
        xhr.setRequestHeader('X-Sent-By', 'JS');
       
        //xhr.onreadystatechange = () =>
        //{
            //this.handleResponse(xhr);
        
       // };
       
        xhr.send(testData);
    }
    handleResponse(xhr){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.status); // Log the HTTP status code
            console.log(xhr.responseText);
            var responce = JSON.parse(xhr.responseText);
            console.log(responce.name)
        }
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
