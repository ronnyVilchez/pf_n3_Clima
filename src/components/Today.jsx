import React, { useContext } from 'react'
import { useOneDay } from './hook/useOneDay'
import { FilterContext } from '../context/FilterContext'
import { DegreesContext } from '../context/DegreesContext'

export const Today = () => {

  const { dataDay } = useOneDay()
  const { positionSearch, modalToday, modal } = useContext(FilterContext)
  const { symbol } = useContext(DegreesContext)

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  }

  return (
    <div className={`${modal ? 'hidden' : ''} flex flex-col gap-[1rem] `}>
      <div className='flex flex.row justify-between p-[2rem] '>
        <button onClick={modalToday} className='bg-[#6E707A] w-[161px] h-[40px]' >Seach for places</button>
        <div className=" flex bg-[#6E707A] w-[40px] h-[40px] rounded-full items-center justify-center">
          <button onClick={positionSearch}><img src="/images/position.svg" alt="my position" width={20} /></button>
        </div>
      </div>

      {
        (dataDay != '') &&
        <div className='flex flex-col'>
          <div className='flex overflow-hidden w-full relative place-content-center h-[340px]'>
            <figure className='absolute w-[580px]'>
              <img className='opacity-5 w-full ' src="/images/Clouds.png" alt="clouds" />
            </figure>

            <figure className='my-auto'>
              <img src={`/images/${dataDay.weather[0].icon}.png`} alt="icon" width={150} height={174} />
            </figure>
          </div>
          <span className='text-[110px] px-[2rem] font-semibold'>{dataDay.main.temp}<span className='text-[48px]  text-[#A09FB1] '>{symbol}</span></span>

          <span className='text-[36px] py-[2rem] text-[#A09FB1] mx-auto'>{dataDay.weather[0].main}</span>
          <div className="flex flex-col px-[2rem] gap-8 items-center mx-auto">
            <span className='text-[18px]  text-[#A09FB1]' >Today - {new Date((dataDay.dt) * 1000).toLocaleString('en-GB', options)}</span>

            <div className='flex gap-2  text-[#A09FB1] mx-auto'>
              <img src="/images/location.svg" alt="location" width={15} />
              <h3 className='text-[18px]'>{dataDay.name}</h3>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
