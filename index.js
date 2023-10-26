// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//7761f878bc7fe8ef445dc4335ae30fd2

let apikey = "7761f878bc7fe8ef445dc4335ae30fd2"

let apiurl = "https://api.openweathermap.org/data/2.5/weather?q="

let searchbox = document.querySelector('#searchbox')

let sbtn = document.querySelector('#search')
let cloud = document.querySelector('#clouds')


async function checkweather(city){
    const responce = await
    fetch(apiurl+city+`&appid=${apikey}`)
    var data = await responce.json()

    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp-273.15) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity +'%'
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h"

    if(data.weather[0].main=== "Clear"){
        cloud.src = "img/images/clear.png"
    }
    else if(data.weather[0].main=== "Clouds"){
        cloud.src = "img/images/clouds.png"
    
    }
    else if(data.weather[0].main=== "Drizzles"){
        cloud.src = "img/images/dizzels.png"
    }
    else if(data.weather[0].main=== "Mist"){
        cloud.src = "img/images/mist.png"
    }
    else if(data.weather[0].main=== "Rain"){
        cloud.src = "img/images/mist.png"
    }
    else if(data.weather[0].main=== "Snow"){
        cloud.src = "img/images/snow.png"
    }


    
}

sbtn.addEventListener('click', ()=>{
    checkweather(searchbox.value)
    
})

