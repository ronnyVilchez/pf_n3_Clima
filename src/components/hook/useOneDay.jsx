import { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../context/FilterContext'
import { usePosition } from './usePosition'

export const useOneDay = () => {

    const { city, setCity } = useContext(FilterContext)
    const [dataDay, setDataDay] = useState([])
    const [value, setValue] = useState('')

    const getDatatwo = async () => {
        try {
            const rsday = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b792af4110fe18dddb3b844b5ebeafd&units=metric`)
            const resultday = await rsday.json()
            setDataDay(resultday)

        } catch (error) {
            setCity('helsinki')
            alert('Direccion no disponible')
        }

    }

    useEffect(() => {
        if (city) {
            getDatatwo()
            console.log(city);
        }
    }, [city])

    const filterCity = (e) => { setValue((e.target.value).toLowerCase()) }
    const searchNow = () => { setCity(value) }

    return { dataDay, filterCity, searchNow, city }
}
