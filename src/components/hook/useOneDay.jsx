import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../context/FilterContext'

export const useOneDay = () => {

    //const{city} = useFilter()
    const { city } = useContext(FilterContext)
    const [dataDay, setDataDay] = useState([])

    // if(city) {console.log(city)}

    //  const [mood, setMood] = useState('')
    // const [city, setCity] = useState('lima')
    const [value, setValue] = useState('')
    //  const cityw = 'barcelona'
    // const clim = 'weather'

    const getDatatwo = async () => {

        const rsday = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b792af4110fe18dddb3b844b5ebeafd&units=metric`)
        const resultday = await rsday.json()
        console.log(resultday);
        setDataDay(resultday)

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
