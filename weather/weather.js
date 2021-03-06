


// var input = document.getElementById("inputText");
// input.addEventListener("keyup", function(event) {
//   if (event.keycode === 13) {
//     event.preventDefault();
//
//   }
// })

const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', function(event) {
  var zip = document.getElementById('inputTxt').value;
  getWeather(zip);
})










function getWeather(zip) {
   var endpoint = "https://api.openweathermap.org/data/2.5/weather";
   var apiKey = "6fea964312b55a39a31f544c3d007950";
   var queryString = "zip=" + zip + "&units=imperial&appid=" + apiKey;
   var url = endpoint + "?" + queryString;

   var xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.responseType = "json";
   xhr.open("GET", url);
   xhr.send();
}

function responseReceivedHandler() {
   var weatherInfo = document.getElementById("weather");
   if (this.status === 200) {
      weatherInfo.innerHTML =
       "<p>Current temp: " + this.response.main.temp + " &deg;F</p>" +
       "<p>Description: " + this.response.weather[0].description + "</p>" +
       "<p>Humidity: " + this.response.main.humidity + "%</p>";
   } else {
      weatherInfo.innerHTML = "Weather data unavailable. Please enter valid zip code.";
   }
}
