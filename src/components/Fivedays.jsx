import React from 'react'
import { useFiveDays } from './hook/useFiveDays'

export const Fivedays = () => {

  const {dataFive} = useFiveDays()

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  }


  return (
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
  )
}
