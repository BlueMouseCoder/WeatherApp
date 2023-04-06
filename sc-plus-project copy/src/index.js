// Challenge 1

// Day
let current = new Date();
let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = dayNames[current.getDay()];
let weekDay = document.querySelector("#week-day");
weekDay.innerHTML = day;

// Time
let hours = current.getHours();
let minutes = current.getMinutes();
let htmlTime = document.querySelector("#time");
htmlTime.innerHTML = `${hours}:${minutes}`;

// City
function displayCity(event) {
  event.preventDefault();
  let city = document.querySelector("#current-city");
  let htmlCity = document.querySelector("#search-form-input");
  city.innerHTML = htmlCity.value;
  console.log(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", displayCity);

// API, search engine
function showCurrentInfo(response) {
  let tempElement = document.querySelector("#current-temp");
  tempElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.name;
}

function searchCurrentInfo(event) {
  let apiCity = document.querySelector("#search-form-input").value;
  apiKey = "842b36d55cb28eba74a018029d56b04c";
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showCurrentInfo);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCurrentInfo);
