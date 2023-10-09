let weather = {
    apikey: "ee3f1818480305ba78384220475ad999",
    fetchweather: function(city){
        fetch( "https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=metric&appid=" 
         + this.apikey)
        .then((Response) => Response.json())
        .then((data) => this.displayweather(data));

    },
    displayweather: function(data){
        const {name} = data;
        const {country} = data.sys;
        const {speed} = data.wind;
        const {temp,feels_like,temp_min,temp_max,pressure,humidity} = data.main;
        const {icon,description} = data.weather[0];
        console.log(name, country, temp, feels_like, humidity, speed, icon, description);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".descript").innerText = description;
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".humid").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".feels").innerText = "Feels-like: " + feels_like + "°C" ;
        document.querySelector(".wind").innerText = "Wind: " + speed + "km/hr";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?"+name+"')";
         
    },
    search: function(){
    this.fetchweather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button")
.addEventListener("click" , function(){
    weather.search()
})

document.querySelector(".search-bar")
.addEventListener("keyup" , function(event){
    if(event.key == "Enter"){
     weather.search()
}
})

