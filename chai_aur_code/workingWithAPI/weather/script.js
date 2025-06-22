const apiKey = 'ab66ca43ba934c2e21fcfde4741d2676'

function getWeather(){
  const city = document.getElementById('cityInput').value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  fetch(url)
  // isme response milega sirf
  .then(response => {
    // console.log(response);
    
    if(!response.ok) throw new Error('city not found')
    else return response.json();
  })
  // isme data milega -> dom manipulation krenge baad me
  .then(data => {
    console.log(data);
    // dom manipulation
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
        <p>🌡 Temp: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      `;
    
  })
  // error ke liye
  .catch(error => {
    document.getElementById('weather').innerHTML = `<p style="color:red;">${error.message}</p>`;
  })
}