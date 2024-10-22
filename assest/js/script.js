
let list = document.querySelectorAll('#ul-list li a');
let allList = document.querySelectorAll('#ul-list li a');
let forcastDiv = document.querySelector('#forecast-div');

list.forEach(anchor => {
 anchor.addEventListener('click',function(){
    allList.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
 });
});

// Array and Store Data

const weatherData = {
   city: 'Islamabad',
   date: 'October 21, 2024',
   temperature: 82,
   highTemp: 84,
   lowTemp: 81,
   condition: 'clear',
   hourlyForecast: [
       { time: 'Now', temp: 92, icon: 'assest/images/daily-temp.png' },
       { time: '11PM', temp: 81, icon: 'assest/images/daily-temp.png' },
       { time: '12AM', temp: 88, icon: 'assest/images/daily-temp.png' },
       { time: '1AM', temp: 75, icon: 'assest/images/daily-temp.png' },
       { time: '2AM', temp: 61, icon: 'assest/images/daily-temp.png' },
       { time: '3AM', temp: 80, icon: 'assest/images/daily-temp.png' }
   ]
};

const today = new Date();
const year = today.getFullYear();
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = monthName[today.getMonth()];
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${day}-${month}-${year}`;

function displayWeather() {
   document.getElementById('country-name').textContent = weatherData.city;
   document.getElementById('day-date').textContent = formattedDate;
   document.getElementById('weather-condition').textContent = weatherData.condition;

   document.getElementById('temperature').innerHTML = `${weatherData.temperature}<sup>°</sup>`;
   document.getElementById('high-temp').innerHTML = `${weatherData.highTemp}<sup>°</sup>`;
   document.getElementById('low-temp').innerHTML = `${weatherData.lowTemp}<sup>°</sup>`;

   const forecastDiv = document.getElementById('forecast-div');
   forecastDiv.innerHTML = ''; 

   weatherData.hourlyForecast.forEach(forecast => {
       const col = document.createElement('div');
       col.classList.add('col-md-2');

       col.innerHTML = `
           <p class="txt-white text-font">${forecast.time}</p>
           <img src="${forecast.icon}" alt="" class="weather-icon">
           <p class="txt-white text-font">${forecast.temp}<sup>°</sup></p>
       `;
       
       forecastDiv.appendChild(col);
   });
}

displayWeather();





