class WeatherReport extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
                <h3> I want the weather </h3> 
                <output></output>
                <form>
                <button type="button">Get the weather?</button>
                </form>
                <style>
                    h3 {
                        color: red;
                    }
                </style>`;
            const output = document.querySelector('output');
            const button = document.querySelector('button');

       
      

        
  
   
 
    
      
    }
}
window.customElements.define('weather-report', WeatherReport)
