function displayTemperature (response){
    console.log(response.data);
let cityElement = document.querySelector("#city");
let temperatureElement = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");

cityElement.innerHTML = response.data.name;
temperatureElement.innerHTML = Math.round(response.data.main.temp);
weatherDescription.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);


}


let apiKey = "0fa5338feee37a23dfae3b92287d5078";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);