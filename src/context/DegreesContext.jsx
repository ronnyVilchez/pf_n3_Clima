import { createContext, useState } from "react";

export const DegreesContext = createContext()

export const DegreesProvider = ({ children }) => {

const [deg, setDeg] = useState()

    const celsius = 'units=metric'
    const fahrenheit = 'units=imperial'

    function updateCelcius() {
        setDeg(celsius)
    }

    function updatefahrenheit() {
        setDeg(fahrenheit)
    }


    return (
        <DegreesContext.Provider value={{ updateCelcius, updatefahrenheit, deg }}>
            {children}
        </DegreesContext.Provider>
    )
}
