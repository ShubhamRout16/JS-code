const apiKey = 'ab66ca43ba934c2e21fcfde4741d2676'

async function getWeather(){
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  try {
    const response = await fetch(url) ;

    if(!response.ok){
      throw new Error('city not found')
    }

    const data = await response.json();
    displayWeather(data) ;
  }
  catch (error) {
    document.getElementById('weather').innerHTML = `<p style="color:red;">${error.message}</p>`;
  }

}

function displayWeather(data){
  const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
        <p>🌡 Temp: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      `;
}