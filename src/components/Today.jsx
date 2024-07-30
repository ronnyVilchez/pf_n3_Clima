import React from 'react'
import { useOneDay } from './hook/useOneDay'

export const Today = () => {

const {dataDay} = useOneDay()

const options = {
  weekday: "short",
  month: "short",
  day: "numeric",
}

  return (
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
  )
}
