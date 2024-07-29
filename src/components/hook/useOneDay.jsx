import React, { useContext, useEffect, useState } from 'react'
import { FetchCoontext } from '../../context/FetchCoontext'

export const useOneDay = () => {

    const [dataDay, setDataDay] = useState([])
    const  {city}  = useContext(FetchCoontext)

    if(city) {console.log(city)}

    //  const [mood, setMood] = useState('')
    //const [city, setCity] = useState('')
    //  const [value, setValue] = useState('')
  //  const cityw = 'barcelona'
   // const clim = 'weather'

    const getDatatwo = async () => {

        const rsday = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b792af4110fe18dddb3b844b5ebeafd&units=metric`)
        const resultday = await rsday.json()
        console.log(resultday);
        setDataDay(resultday)
    }



    useEffect(() => {
        if (city) { getDatatwo() }
    }, [city])

    /*  const filterCity = (e) => {setValue((e.target.value).toLowerCase())}
     const searchNow = () => {setCity(value)} */

    return { dataDay }
}
