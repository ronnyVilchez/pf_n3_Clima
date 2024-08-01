import React, { useContext } from 'react'
import { useOneDay } from './hook/useOneDay'
import { DegreesContext } from '../context/DegreesContext'

export const DetailsToday = () => {

  const { dataDay } = useOneDay()
  const { metric } = useContext(DegreesContext)
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
    <div className="flex flex-col flex-wrap shrink gap-[1rem] w-full bg-[#100E1D] mx-auto sm:mt-[1rem] p-[1rem]">
      <h2 className='font-semibold text-[24px] sm:ml-[4rem] sm:py-4'>Today’s Hightlights</h2>
      {(dataDay != '') &&
        <div className='flex flex-col sm:shrink gap-8 sm:grid sm:grid-cols-[50%,50%] sm:mx-auto'>

          <div className='flex flex-col sm:shrink place-content-center p-4 items-center gap-2 bg-[#1E213A]'>
            <h3>Wind status</h3>
            <h2 className='text-[7vh] font-semibold'>{dataDay.wind.speed} <span className='text-[5vh] font-normal '>{metric}</span></h2>
            <div className="flex gap-4 items-center">
              <figure className='flex bg-[#616475] w-10 h-10 rounded-full justify-center'>
                <img className='' src={'/images/nav.svg'} alt="Icon nav" width={20} style={{ rotate: `${(dataDay.wind.deg)}deg` }} />
              </figure>
              <span>{wind(dataDay.wind.deg)}</span>
            </div>
          </div>

          <div className='flex flex-col sm:shrink place-content-center py-8 sm:py-0 px-[3.5rem] items-center gap-2 bg-[#1E213A]'>
            <h3>Humidity</h3>
            <h2 className='text-[7vh] font-semibold'>{dataDay.main.humidity} <span className='text-[5vh] font-normal'>%</span></h2>
            <div className="flex flex-col h-auto w-full">
              <div className="flex flex-row justify-between">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <div className="flex flex-col h-auto w-full rounded-full bg-white">

                <div className="bg-[#FFEC65] rounded-full h-2" style={{ width: `${dataDay.main.humidity}%` }}></div>
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:shrink place-content-center p-4 items-center gap-2 bg-[#1E213A]'>
            <h3>Visibility</h3>
            <h2 className='text-[7vh] font-semibold'>{((dataDay.visibility) === 10000) ? (dataDay.visibility / 1000) : (dataDay.visibility).toLocaleString().slice(0, 3)} <span className='text-[5vh] font-normal'>miles</span></h2>
          </div>

          <div className='flex flex-col sm:shrink place-content-center p-4 items-center gap-2 bg-[#1E213A]'>
            <h3>Air Pressure</h3>
            <h2 className='text-[7vh] font-semibold'>{dataDay.main.pressure} <span className='text-[5vh] font-normal'>mb</span></h2>
          </div>
        </div>}
    </div>
  )
}
