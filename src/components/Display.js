import "./Display.css"
import brokenClouds from "../assets/images/brokenclouds.png"
import clearSky from "../assets/images/clearsky.png"
import fewClouds from "../assets/images/fewclouds.png"
import scatteredClouds from "../assets/images/scatteredclouds.png"
import showerRain from "../assets/images/showerrain.png"
import rain from "../assets/images/rain.png"
import thunderstorm from "../assets/images/thunderstorm.png"
import snow from "../assets/images/snow.png"
import mist from "../assets/images/mist.png"

function Display(props) {
  const data = props.data
console.log(data)
  function weatherImage() {
    const weather = data.weather[0].description;
    return weather === "broken clouds" 
    ? brokenClouds
    : weather === "clear sky"
    ? clearSky
    : weather === "few clouds"
    ? fewClouds
    : weather === "scattered clouds"
    ? scatteredClouds
    : weather === "shower rain"
    ? showerRain
    : weather === "light rain"
    ? rain
    : weather === "thunderstorm"
    ? thunderstorm
    : weather === "snow"
    ? snow
    : weather === "mist"
    ? mist
    : console.log("Cannot match image")
  }

  //Convert Kelvins to Celcius
  function toCelcius(num) {
    return Math.round(num - 273.15) + "˚c";
  }
  
  return (
    <div>
      {data.main === undefined
        ? console.log("Location does not exist") : 
        <div className="display">
          <div className="name">{data.name}</div>
          <img src={weatherImage()}></img>
          <div className="temp">Current Temp: {toCelcius(data.main.temp)}</div>
          <div className="humidity">Humidity: {data.main.humidity}%</div>
          <div className="max">Max: {toCelcius(data.main.temp_max)}</div>
          <div className="min">Min: {toCelcius(data.main.temp_min)}</div>
        </div>
      }
    </div>
  )
}

export default Display;