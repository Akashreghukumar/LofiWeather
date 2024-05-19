import React from 'react'

const WeatherCard = ({background,data}) => {
  console.log("data",data)
  return (
    <div className={`card ${background}`}>
    <div className="card-content">
        <div >
           <h2>{data.location.name}, {data.location.country}</h2>
        </div>
        <div>
            <h1>{data.current.temp_c}°C </h1>
        </div>
        <div>
            <h4>Feels like : {data.current.feelslike_c}°C </h4>
        </div>
        <div>
            <h4>{data.current.condition.text}</h4>
        </div>
    </div>
  </div>
  )
}

export default WeatherCard