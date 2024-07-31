import React, { useContext } from 'react'
import { DegreesContext } from '../context/DegreesContext'

export const NavBody = () => {

    const { updateCelcius, updatefahrenheit, background } = useContext(DegreesContext)

    return (
        <div className='hidden sm:flex sm:justify-end sm:mr-[4rem] sm:mt-2 pr-4 gap-3'>
            <button className={`${background ? 'bg-[#E7E7EB] text-[#110E3C]' : 'bg-[#585676] text-[#E7E7EB]'} font-semibold rounded-full w-[30px] p-1`} onClick={updateCelcius}>°C</button>
            <button className={`${!background ? 'bg-[#E7E7EB] text-[#110E3C]' : 'bg-[#585676] text-[#E7E7EB]'} font-semibold rounded-full w-[30px] p-1`} onClick={updatefahrenheit}>°F</button>
        </div>
    )
}
