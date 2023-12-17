const apiKey = "f921a592f3f6144b73f95f580b3bdf1a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);

if(respone.status == 404){
    document.querySelector(".error").style.display = "block"
    document.querySelector(".main").style.display = "none"
} else {
    var data = await respone.json();


    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".num").innerHTML = data.main.humidity + "%";
    document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    } 
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    } 
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }


    document.querySelector(".main").style.display = "flex"
    document.querySelector(".error").style.display = "none"
}

    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

