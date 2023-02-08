/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("Melbourne, AU");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=93b3d1cf5fb24969e5e8bd269a7696ae`
      );
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, [input]);

  function submitLocation(e) {
    e.preventDefault();
    setInput(location);
  }

  return (
    <div className="App">
      <Header />
      <div className="input-container">
        <form submit={submitLocation}>
          <input
            type="text"
            className="input-location"
            placeholder="Type a location"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
          <button type="submit" className="submit" onClick={submitLocation}>
            Submit
          </button>
        </form>
      </div>
      {data?.main && <Display data={data} />}
    </div>
  );
}

export default App;
