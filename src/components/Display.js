function Display(props) {
  const data = props.data

  //Convert Kelvins to Celcius
  function toCelcius(num) {
    return Math.round(num - 273.15);
  }

  return (
    <div>
      {data.main === undefined
        ? console.log("No results") : 
        <div className="display">
          <div>{data.name}</div>
          <div>Current Temp: {toCelcius(data.main.temp)}</div>
          <div>Humidity: {data.main.humidity}</div>
          <div>Max: {toCelcius(data.main.temp_max)}</div>
          <div>Min: {toCelcius(data.main.temp_min)}</div>
        </div>
      }
    </div>
  )
}

export default Display;