import React from 'react'
import { Fivedays } from './Fivedays'
import { DetailsToday } from './DetailsToday'
import { NavBody } from './NavBody'

export const Body = () => {
    return (
        <>
            <NavBody />
            <Fivedays />
            <DetailsToday />
        </>
    )
}
