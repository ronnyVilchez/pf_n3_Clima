import React, { useContext } from 'react'
import { useOneDay } from './hook/useOneDay'
import { FilterContext } from '../context/FilterContext'

export const Today = () => {

  const { dataDay } = useOneDay()
  const { positionSearch } = useContext(FilterContext)

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  }

  return (
    <div className="flex flex-col gap-[1rem] p-[2rem]">
      <div className='flex flex.row justify-between'>
        <button >Seach for places</button>
        <button onClick={positionSearch}><img src="/images/position.svg" alt="my position" width={20} /></button>
      </div>

      {
        (dataDay != '') &&
        <div className='flex flex-col mx-auto items-center gap-[6rem] '>
          <img className=''src={`/images/${dataDay.weather[0].icon}.png`} alt="icon" width={150} height={174} />

          <span className='text-[120px] font-semibold'>{dataDay.main.temp}<span className='text-[48px]  text-[#A09FB1] '>°C</span></span>

          <span className='text-[36px]  text-[#A09FB1]'>{dataDay.weather[0].main}</span>
          <div className="flex flex-col gap-8 items-center">
            <span className='text-[18px]  text-[#A09FB1]' >Today - {new Date((dataDay.dt) * 1000).toLocaleString('en-GB', options)}</span>

            <div className='flex gap-2  text-[#A09FB1]'>
              <img src="/images/location.svg" alt="location" width={15} />
              <h3 className='text-[18px]'>{dataDay.name}</h3>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
