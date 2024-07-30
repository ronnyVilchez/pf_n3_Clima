import { createContext, useEffect, useState } from "react";
import { usePosition } from "../components/hook/usePosition";

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {

//    const [results, setResults] = useState('')
    const [value, setValue] = useState('')
    const [city, setCity] = useState('helsinki')
    // const { results } = usePosition()

/*     useEffect(() => {
        if (results) {
            const cityPosition = results
            console.log(cityPosition);
            setCity(cityPosition)
        } else { setCity('madrid') }
    }, []) */

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
                    console.log(resultPosition.name.toLowerCase());
                    setCity(resultPosition.name.toLowerCase())
                   // setResults(resultPosition.name.toLowerCase());
                }
                fetchData()
            }
        })


    }
    // console.log('object');
    // console.log(results);

    return (
        <FilterContext.Provider value={{ filterCity, searchNow, city, positionSearch,setCity }}>
            {children}
        </FilterContext.Provider>
    )
}