class WeatherReport extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
                
                <section>
                <h3> Want the weather? </h3> 
                <formfield>
                    <form>
                        <button type="button" class="icon-button">
                            <img src="buttonImages/CondButton.png" alt="Icon">
                        </button>
                        <output id="temp"></output> 
                    </form>
                    </formfield>
                <section>
                    <style>
                    form {
                        border: 3px solid;
                        background-color: white;
                        width: 100%;
                        
                    }
                    h3 {
                        color: black;
                    }
                    .icon-button img {
                        width: 45px; /* Adjust the width of the icon */
                        height: 35px; /* Adjust the height of the icon */
                        margin-right: 5px; /* Adjust the margin between the icon and text (if any) */
                    }
                    .icon-button {
                        background: none;
                        border: none;
                        cursor: pointer;
                        padding: 0;
                        display: inline;
                        align-items: center;
                    }
                </style>`;
            
           
            

       
      

        
  
   
 //image citations: https://designbundles.net/sentretvector/2408953-weather-conditions-line-icon-cloud-cloudy-sun-rain
    
      
        }
        connectedCallback() {
            this.fetchWeather();
        }
        fetchWeather(){
            const output = this.shadowRoot.querySelector('output');
            const buttons = this.shadowRoot.querySelectorAll('button');
                 fetch('https://api.openweathermap.org/data/2.5/weather?lat=32.7157&lon=-117.1611&appid=ece9582912061f945e67ad8dcd02be21')
                    .then(response => {
                            // Check if the response is ok (status in the range 200-299)
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(data => {
                            // Display the time
                            const output1 = this.shadowRoot.getElementById('temp');
                            
                            let tempK = (data.main.temp)
                            let tempC = (tempK-273.15).toFixed(2);
                            let tempF = (tempC * 9/5) + 32;

                            let cond = data.weather[0].description;
                            let conditions = `The tempurature is ${tempC} \u00B0C, with ${cond}`
                            output1.textContent = conditions;
                           
                        })
                        .catch(error => {
                            // Handle any errors
                            console.error('Fetch error:', error);
                            output.textContent = 'Error fetching time';
                        });
                };
        
        }
    

window.customElements.define('weather-report', WeatherReport)
