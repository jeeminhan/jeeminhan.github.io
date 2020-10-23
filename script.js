var responses = ["Without a doubt" , "Ask again later", "Don't count on it", "Why are you running?", "Only when September ends"];

var randomNum = Math.floor(Math.random() * responses.length);
document.getElementById("java").innerHTML = ("<p>Magic 8 Ball says... <strong>" + responses[randomNum] + "</strong>.</p>");


getWeather(77840);

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
       "<p>Desc: " + this.response.weather[0].description + "</p>" +
       "<p>Humidity: " + this.response.main.humidity + "%</p>";
   } else {
      weatherInfo.innerHTML = "Weather data unavailable.";
   }
}
