import { createContext, useState } from "react";

export const DegreesContext = createContext()

export const DegreesProvider = ({ children }) => {

    const [deg, setDeg] = useState()
    const [symbol, setSymbol] = useState('°C')
    const [background, setBackground] = useState(true)
    const [metric, setMetric] = useState('mps')

    const celsius = 'units=metric'
    const fahrenheit = 'units=imperial'

    function updateCelcius() {
        setDeg(celsius)
        setSymbol('°C')
        setBackground(true)
        setMetric('mps')
    }

    function updatefahrenheit() {
        setDeg(fahrenheit)
        setSymbol('°F')
        setBackground(false)
        setMetric('mph')
    }


    return (
        <DegreesContext.Provider value={{ updateCelcius, updatefahrenheit, deg, symbol, background, metric }}>
            {children}
        </DegreesContext.Provider>
    )
}
