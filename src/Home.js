import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios';




function Home() {
  const [data, setData] = useState({
    celcius: 10,
    name: 'London',
    humidity:10,
    speed:2
  })
  const [name,setName] = useState('');
  const handleclick = () => {
    if(name !==""){
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=fe157ea1e367899c48539815b7882849&units=metric`;
      axios.get(apiUrl)
      .then(res => {
        setData({...data,celcius: res.data.main.temp,name: res.data.name,humidity: res.data.main.humidity,speed: res.data.wind.speed})
      })
      .catch(err => console.log(err));
    }
  }


  return (
    <div>
        <div className='container'>
    <div className='top-bar'> 
    <input type="text" className='cityinput' placeholder='Search' onChange={e => setName(e.target.value)}/>
    <div className='search-icon'>
    <button><img src="Images/search.png"alt="" onClick={handleclick}/></button>
    </div>
    </div>
    <div className='weather-image'>
      <img src="Images/cloud.png" alt="" />
    </div>
    <div className="weather-temp">{Math.round(data.celcius)}°C</div>
    <div className="weather-location">{data.name}</div>
    <div className="data-container">

<div className='element'>
<img src="Images/humidity.png" alt="" />
        <div className="data">
          <div className="humidity-percent">{Math.round(data.humidity)}%</div>
          <div className="text">Humidity</div>
        </div>
      </div>

<div className='element'>
        <img src="Images/wind.png" alt="" />
        <div className="data">
          <div className="wind-rate">{Math.round(data.speed)}km/h</div>
          <div className="text">Wind Speed</div>
        </div>
      </div>

    </div>
</div>
    </div>
  )
}

export default Home;