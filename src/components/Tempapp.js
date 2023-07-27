import React, { useEffect } from 'react'
import { useState } from 'react';
import "./css/Style.css"
const d=new Date();
  let day=d.getDate();
  let mon=d.getMonth();
  let y=d.getFullYear();

 function datesinfo() {
  
}

console.log(d);
const Tempapp = () => {
  const [city,setCity]=useState(null)
  const[search,setSearch]=useState("Mumbai");
  useEffect(()=>{
    const fetchApi=async()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=974911fdf4dfdc7edf42bcdd56f7e434`
      const response=await fetch(url);
      const resjson= await response.json();
      console.log(resjson);
     
      setCity(resjson.main);
    }
    fetchApi();
  },[search])
  return (
    <div className='box'>
    <div className="container">
    <div className="search">
      <input type='search' placeholder="Search you city" onChange={(event)=>{setSearch(event.target.value)

      }} />
    </div>
    <div className="dates">
    <div className="image">
    <i className="fa-solid fa-sun fa-4x"></i>
    </div>
<div className="date_info">
<h2>7:20:00</h2>
<h3>{day}<sup>th</sup> july {y}</h3>
</div>

    </div>
    {
      !city ?(
        <p>No data found</p>
      ):(
        <div className="weather_info">
      <h1>{city.temp}&deg;F</h1>
      <h3>{search} </h3>
    </div>
      )
    }
   
    <div className="casting">
    <i className="fa-regular fa-sun fa-3x"></i>
    <i className="fa-solid fa-cloud fa-3x"></i>
    <i className="fa-solid fa-cloud-rain fa-3x"></i>
    <i className="fa-solid fa-smog fa-3x"></i>
    </div>
    </div>
   
    </div>
  )
}

export default Tempapp
