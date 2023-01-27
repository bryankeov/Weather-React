import './App.css';
import Header from "./components/Header"
import Display from "./components/Display"
import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])
  const [input, setInput] = useState("melbourne")
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=93b3d1cf5fb24969e5e8bd269a7696ae`)
      const newData = await response.json();
      setData(newData)
    }
    fetchData()
  }, [input])

  function submitLocation() {
    const inputLoc = document.getElementsByClassName("input-location")[0];
    setInput(inputLoc.value);
  }

  return (
    <div className="App">
      <Header/>
      <label>
        <input type="text" className="input-location" placeholder="Type a location"></input>
        <button type="submit" onClick={submitLocation}>Submit</button>
      </label>
      <Display
        data={data}
      />
    </div>
  );
}

export default App;
