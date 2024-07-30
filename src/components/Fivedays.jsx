import React from 'react'
import { useFiveDays } from './hook/useFiveDays'

export const Fivedays = () => {

  const { dataFive } = useFiveDays()

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  }


  return (
    <div className="sm:flex sm:flex-row  grid grid-cols-2 gap-[1.5rem] sm:gap-[2rem] bg-[#100E1D]  p-[1rem] mx-auto mt-[3rem]">

      {(dataFive != '') &&
        dataFive.map((day => (
          <div className=" bg-[#1E213A] flex flex-col items-center justify-between py-4 w-[150px] h-[207px]" key={day.dt}>
            <h1>{(day.dt === 'Tomorrow') ? 'Tomorrow' : new Date(day.dt * 1000).toLocaleString('en-GB', options)}</h1>
            <img src={`/images/${day.weather[0].icon}.png`} alt="icon" width={71} height={77} />
            <div className="flex flex-row gap-4">
              <span>{day.main.temp_max}</span>
              <span className=' text-[#A09FB1]'>{day.main.temp_min}</span>
            </div>
          </div>
        )))
      }
    </div>
  )
}
