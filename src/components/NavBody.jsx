import React, { useContext } from 'react'
import { DegreesContext } from '../context/DegreesContext'

export const NavBody = () => {

    const { updateCelcius, updatefahrenheit } = useContext(DegreesContext)

    return (
        <div className='hidden sm:flex sm:justify-end sm:mr-[8rem] sm:mt-8 pr-4 text-[#110E3C] gap-3'>
            <button className='bg-[#E7E7EB] rounded-full w-[30px] p-1' onClick={updateCelcius}>°C</button>
            <button className='bg-[#E7E7EB] rounded-full w-[30px] p-1' onClick={updatefahrenheit}>°F</button>
        </div>
    )
}
