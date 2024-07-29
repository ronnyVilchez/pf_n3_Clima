import React, { useContext, useEffect, useState } from 'react'
import { FetchCoontext } from './context/FetchCoontext'

export default function App() {
  const city = 'barcelona'
  const clim = 'weather'

  const  {dataDay,filterCity, searchNow,dataFive} = useContext(FetchCoontext)

  const getData = async () => {

   
    //setMood(clim)
   /*  const rs = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0b792af4110fe18dddb3b844b5ebeafd&units=metric`)
    const result = await rs.json()

    const daysFive = result.list.filter(obj => obj.dt_txt.includes("12:00:00"))

    const newFiveDays = daysFive.map((day, i) => {
      if (i === 0) {
        return {
          ...day,
          dt: 'Tomorrow'
        }
      }

      return day
    })


    setData(newFiveDays) */

  }

/*   useEffect(() => {
    //getDatatwo()
   // getData()
  }, [])
  */



  var options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  }


  const wind = (grados) => {
    if (grados > 0 & grados < 22.5) {
      return 'N'
    }
    if (grados >= 22.5 & grados < 45) {
      return 'NNE'
    }
    if (grados >= 45 & grados < 67.5) {
      return 'NE'
    }
    if (grados >= 67.5 & grados < 90) {
      return 'ENE'
    }
    if (grados >= 90 & grados < 112.5) {
      return 'E'
    }
    if (grados >= 112.5 & grados < 135) {
      return 'ESE'
    }
    if (grados >= 135 & grados < 157.5) {
      return 'SE'
    }
    if (grados > 157.5 & grados < 180) {
      return 'SSE'
    }
    if (grados > 180 & grados < 202.5) {
      return 'S'
    }
    if (grados >= 202.5 & grados < 225) {
      return 'SSW'
    }
    if (grados >= 225 & grados < 247.5) {
      return 'SW'
    }
    if (grados >= 247.5 & grados < 270) {
      return 'WSW'
    }
    if (grados >= 270 & grados < 292.5) {
      return 'W'
    }
    if (grados >= 292.5 & grados < 315) {
      return 'WNW'
    }
    if (grados >= 315 & grados < 337.5) {
      return 'NW'
    }
    if (grados >= 337.5 & grados < 360) {
      return 'NHW'
    }


  }

  console.log(dataFive);
  console.log(dataDay);

  return (
    <div>
      <div className="search">
        <input type="search" onChange={filterCity} />
        <button onClick={searchNow}> Buscar </button>
      </div>
      <div className="flex flex-col gap-[1rem]  bg-slate-300 m-auto p-[2rem]">
        {
        (dataDay != '') && 
        <>
          <span>{dataDay.main.temp}°C</span>
        <span>{dataDay.weather[0].icon}</span>
        <span>{dataDay.weather[0].description}</span>
        <img src={`/images/${dataDay.weather[0].icon}.png`} alt="icon" width={50} />
        <span>Today - {new Date((dataDay.dt) * 1000).toLocaleString('en-GB', options)}</span>
        <span>{dataDay.name}</span>
        </>
        }
      </div>
      <div className="flex flex-col gap-[1rem] text-white  bg-cyan-800 m-auto p-[2rem]">

        {(dataFive != '') &&
          dataFive.map((day => (
            <div className="flex flex-col" key={day.dt}>
              <h1>{(day.dt === 'Tomorrow') ? 'Tomorrow' : new Date(day.dt * 1000).toLocaleString('en-GB', options)}</h1>
              <span>Imagen-°C {day.weather[0].icon}</span>
              <span>Imagen-°C {day.weather[0].description}</span>
              <img src={`/images/${day.weather[0].icon}.png`} alt="icon" width={50} />
              <span>{day.main.temp_max}</span>
              <span>{day.main.temp_min}</span>
            </div>
          )))
        }
      </div>
      <div className="flex flex-col gap-[1rem]  bg-red-300 m-auto p-[2rem]">
       { (dataDay != '') && 
       <>
        <span>{dataDay.wind.speed}mph--{wind(dataDay.wind.deg)}</span>
        <img src={'/images/nav.svg'} alt="nav" width={20} style={{ rotate: `${(dataDay.wind.deg)}deg` }} />
        <span>{dataDay.main.humidity}%</span>
        <span>{((dataDay.visibility) === 10000) ? (dataDay.visibility / 1000) : (dataDay.visibility).toLocaleString().slice(0, 3)} miles</span>
        <span>{dataDay.main.pressure} mb</span>
        </>}
      </div>
    </div>
  )
}


