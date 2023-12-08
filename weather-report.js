class WeatherReport extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
                <h3> I want the weather </h3> 
                <style>
                    h3 {
                        color: red;
                    }
                </style>`;
        const heading = document.createElement('h2');
        heading.textContent = 'Ratings Widget';

       
      

        
  
   
 
    
      
    }
}
window.customElements.define('weather-report', WeatherReport)
