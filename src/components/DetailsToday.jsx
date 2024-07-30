import React from 'react'
import { useOneDay } from './hook/useOneDay'

export const DetailsToday = () => {

  const {dataDay} = useOneDay()

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
      
    return (
        <div className="flex flex-col gap-[1rem]  bg-red-300 m-auto p-[2rem]">
            {(dataDay != '') &&
                <>
                    <span>{dataDay.wind.speed}mph--{wind(dataDay.wind.deg)}</span>
                    <img src={'/images/nav.svg'} alt="nav" width={20} style={{ rotate: `${(dataDay.wind.deg)}deg` }} />
                    <span>{dataDay.main.humidity}%</span>
                    <span>{((dataDay.visibility) === 10000) ? (dataDay.visibility / 1000) : (dataDay.visibility).toLocaleString().slice(0, 3)} miles</span>
                    <span>{dataDay.main.pressure} mb</span>
                </>}
        </div>
    )
}
