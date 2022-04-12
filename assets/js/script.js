const searchHistory = [];
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=30&lon=35&appid=";
const apiKey = "b3c112276882c79713431e06ab1557f1";
const searchQuery = document.getElementById('site-search');

let searchForm = document.getElementById('search-form');

fetch(weatherApiUrl + apiKey)
.then(response => response.json())
.then(data => console.log(data));