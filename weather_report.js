class WeatherReport extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        
            
           
            

       
      

        
  
   
 //image citations: https://designbundles.net/sentretvector/2408953-weather-conditions-line-icon-cloud-cloudy-sun-rain
    
      
        }
        connectedCallback() {
            this.shadowRoot.innerHTML = `
                
                <section>
                <h3> Want the weather? </h3> 
                
                    <select id="units">
                    
                        <option value="0">Celcious</option>
                        <option value="1">Fahrenheit</option>
                    </select>
                    <br>
               
                <formfield>
                    <form>
                        <button type="button" class="icon-button">
                            <img id="icon" src="buttonImages/CondButton.png" alt="ICON">
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
            const savedWeatherIcon = localStorage.getItem('savedWeatherIcon');
            if(savedWeatherIcon){
                this.shadowRoot.getElementById('icon').src = savedWeatherIcon;
            }
            this.units = this.shadowRoot.getElementById('units');
            this.units.addEventListener('change', () => this.fetchWeather());
            
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
                            const weatherIcon = this.shadowRoot.getElementById('icon');
                            
                            
                            let tempK = (data.main.temp)
                            let tempC = (tempK-273.15).toFixed(2);
                            let tempF = ((tempC * 9/5) + 32).toFixed(2) ;
                            try {
                               
                                const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                                weatherIcon.src = iconUrl;
                                this.saveWeatherIconToLocal();
                            }
                            catch (error){
                                console.error('Error constructing icon URL:', error);

                            }
                            let conditions;
                            let cond = data.weather[0].description;
                            const units = this.shadowRoot.getElementById('units');
                            if (units.value === '1'){
                                conditions = `The tempurature is ${tempF} \u00B0F, with ${cond}`
                            }
                            else{
                                conditions = `The tempurature is ${tempC} \u00B0C, with ${cond}`
                            }
                            
                            output1.textContent = conditions;
                           
                        })
                        .catch(error => {
                            // Handle any errors
                            console.error('Fetch error:', error);
                            output.textContent = 'Error weather';
                        });
        
        }
        saveWeatherIconToLocal() {

            const iconUrl = this.shadowRoot.getElementById('icon').src;
            localStorage.setItem('savedWeatherIcon', iconUrl);
        }    
    
    }
window.customElements.define('weather-report', WeatherReport)
