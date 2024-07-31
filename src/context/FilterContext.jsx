import { createContext, useState } from "react";

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {

    const [value, setValue] = useState('')
    const [city, setCity] = useState('helsinki')
    const [modal, setModal] = useState(false)

    const filterCity = (e) => { setValue((e.target.value).toLowerCase()) }
    const searchNow = () => { setCity(value) }

    const positionSearch = () => {

        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude

            if (latitude && longitude) {
                async function fetchData() {
                    const rsPs = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0b792af4110fe18dddb3b844b5ebeafd&units=metric`)

                    const resultPosition = await rsPs.json()
                    setCity(resultPosition.name.toLowerCase())
                }
                fetchData()
            }
        })


    }

    const modalToday = () => {
        setModal(!modal)
    }

    const valueSearch = (e) => {
        setCity(e.target.closest('div').querySelector('h2').textContent);
    }
    return (
        <FilterContext.Provider value={{ filterCity, searchNow, city, positionSearch, setCity, modalToday, modal, valueSearch }}>
            {children}
        </FilterContext.Provider>
    )
}