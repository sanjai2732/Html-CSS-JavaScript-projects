const search=document.getElementById("search")
const WeatherImage=document.getElementById("WeatherImage")
const degree=document.getElementById("degree")
const city=document.getElementById("city")
const laptitude=document.getElementById("lap-dtn")
const longitute=document.getElementById("long-dtn")
const humidity=document.getElementById("Humidity_prectage")
const windSpeed=document.getElementById("wind_speed")
const country=document.getElementById("in")
search.addEventListener("click",find)
 async function find(){
    const input=document.querySelector("input").value
    try{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=4d82260ecea6107e17bf5e96a68f29a2`
    const res=await fetch(url)
    const main=await res.json()
    console.log(main)
    if(main.cod == 404){
        document.querySelector("section").style.display="none"
        document.getElementById("error").style.display="flex"
        document.getElementById("head").style.borderRadius="1rem"
     }
     else{
     city.innerHTML=input
     degree.innerText=Math.floor((main.main.temp)/10)+" °C"
     laptitude.innerHTML=main.coord.lat
     longitute.innerHTML=main.coord.lon
     humidity.innerHTML=main.wind.deg+" %"
     windSpeed.innerHTML=main.wind.speed+" Km/h"
     country.innerHTML=main.sys.country
     document.querySelector("section").style.display="grid"
     document.getElementById("head").style.borderRadius="1rem 1rem 0 0"
     document.getElementById("error").style.display="none"
     if(main.weather[0].main=="Clouds"){
        WeatherImage.setAttribute('src',"image/clouds.png")
     }
     if(main.weather[0].main=="Clear"){
        WeatherImage.setAttribute('src',"image/clear.png")
     }
     if(main.weather[0].main=="Drizzle"){
        WeatherImage.setAttribute('src',"image/drizzle.png")
     }
     if(main.weather[0].main=="Snow"){
        WeatherImage.setAttribute('src',"image/snow.png")
     }
     if(main.weather[0].main=="Rain"){
        WeatherImage.setAttribute('src',"image/rain.png")
     }
     if(main.weather[0].main=="Mist"){
        WeatherImage.setAttribute('src',"image/mist.png")
     }
     if(main.weather[0].main=="Haze"){
        WeatherImage.setAttribute('src',"image/mist.png")
     }

     }
   
    }
    catch(error){
        console.log(error)
    }

}
