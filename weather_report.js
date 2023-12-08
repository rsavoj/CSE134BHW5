class WeatherReport extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
                <h3> I want the weather </h3> 
                
                <form>
                <button type="button">Get the weather?</button>
                <output></output>
                </form>
                <style>
                    h3 {
                        color: red;
                    }
                </style>`;
            const output = this.shadowRoot.querySelector('output');
            const button = this.shadowRoot.querySelector('button');
            button.addEventListener('click', () => {
                // Call the fetch API
                //
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=32&lon=118&appid=ece9582912061f945e67ad8dcd02be21')
                    .then(response => {
                        // Check if the response is ok (status in the range 200-299)
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Display the time
                        output.textContent = data.main.temp;
                    })
                    .catch(error => {
                        // Handle any errors
                        console.error('Fetch error:', error);
                        output.textContent = 'Error fetching time';
                    });
            });

       
      

        
  
   
 
    
      
    }
}
window.customElements.define('weather-report', WeatherReport)
