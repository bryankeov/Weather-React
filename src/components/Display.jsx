/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import "./Display.css";
import brokenClouds from "../assets/images/brokenclouds.png";
import clearSky from "../assets/images/clearsky.png";
import fewClouds from "../assets/images/fewclouds.png";
import scatteredClouds from "../assets/images/scatteredclouds.png";
import showerRain from "../assets/images/showerrain.png";
import rain from "../assets/images/rain.png";
import thunderstorm from "../assets/images/thunderstorm.png";
import snow from "../assets/images/snow.png";
import mist from "../assets/images/mist.png";

const WEATHER_IMG = {
  "broken clouds": brokenClouds,
  "clear sky": clearSky,
  "few clouds": fewClouds,
  "scattered clouds": scatteredClouds,
  "shower rain": showerRain,
  "light rain": rain,
  "overcast clouds": scatteredClouds,
  fog: brokenClouds,
  thunderstorm,
  snow,
  mist,
};

function Display(props) {
  const { weather, name, main } = props.data;
  const desc = weather[0].description;
  const weatherImg = WEATHER_IMG[desc];

  //  Convert Kelvins to Celcius
  function toCelcius(num) {
    return `${Math.round(num - 273.15)}˚c`;
  }

  return (
    <div>
      {main === undefined ? (
        <div className="display">Sorry, your location could not be found!</div>
      ) : (
        <div className="display">
          <div className="name">{name}</div>
          <img alt={desc} src={weatherImg} />
          <div className="temp">Current Temp: {toCelcius(main.temp)}</div>
          <div className="humidity">Humidity: {main.humidity}%</div>
          <div className="max">Max: {toCelcius(main.temp_max)}</div>
          <div className="min">Min: {toCelcius(main.temp_min)}</div>
        </div>
      )}
    </div>
  );
}

export default Display;
