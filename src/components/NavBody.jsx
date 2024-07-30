import React, { useContext } from 'react'
import { DegreesContext } from '../context/DegreesContext'

export const NavBody = () => {

    const { updateCelcius, updatefahrenheit } = useContext(DegreesContext)

    return (
        <div>
            <button onClick={updateCelcius}>°C</button>
            <button onClick={updatefahrenheit}>°F</button>
        </div>
    )
}
