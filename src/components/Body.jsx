import React from 'react'
import { Fivedays } from './Fivedays'
import { DetailsToday } from './DetailsToday'
import { NavBody } from './NavBody'

export const Body = () => {
    return (
        <div className='bg-[#100E1D]  p-4 flex flex-col sm:w-[70%] sm:h-screen'>
            <NavBody />
            <Fivedays />
            <DetailsToday />
        </div>
    )
}
