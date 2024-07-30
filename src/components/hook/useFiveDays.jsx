import React, { useContext, useEffect, useState } from 'react'
import { useOneDay } from './useOneDay'
import { FilterContext } from '../../context/FilterContext'

export const useFiveDays = () => {

  const [dataFive, setDataFive] = useState([])

  //const { city } = useOneDay()
  //const{city} = useFilter()

   const { city } = useContext(FilterContext)
  //const [city, setCity] = useState('madrid')
  //   const [value, setValue] = useState('')

  //const cityw = 'barcelona'
  // const clim = 'weather'

  const getData = async () => {

    const rs = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0b792af4110fe18dddb3b844b5ebeafd&units=metric`)
    const result = await rs.json()

    const daysFive = result.list.filter(obj => obj.dt_txt.includes("12:00:00"))

    const newFiveDays = daysFive.map((day, i) => {
      if (i === 0) {
        return {
          ...day,
          dt: 'Tomorrow'
        }
      }

      return day
    })


    setDataFive(newFiveDays)
  }

  /*   const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
      }
    
    
      const wind = (grados) => {
        if (grados > 0 & grados < 22.5) {
          return 'N'
        }
        if (grados >= 22.5 & grados < 45) {
          return 'NNE'
        }
        if (grados >= 45 & grados < 67.5) {
          return 'NE'
        }
        if (grados >= 67.5 & grados < 90) {
          return 'ENE'
        }
        if (grados >= 90 & grados < 112.5) {
          return 'E'
        }
        if (grados >= 112.5 & grados < 135) {
          return 'ESE'
        }
        if (grados >= 135 & grados < 157.5) {
          return 'SE'
        }
        if (grados > 157.5 & grados < 180) {
          return 'SSE'
        }
        if (grados > 180 & grados < 202.5) {
          return 'S'
        }
        if (grados >= 202.5 & grados < 225) {
          return 'SSW'
        }
        if (grados >= 225 & grados < 247.5) {
          return 'SW'
        }
        if (grados >= 247.5 & grados < 270) {
          return 'WSW'
        }
        if (grados >= 270 & grados < 292.5) {
          return 'W'
        }
        if (grados >= 292.5 & grados < 315) {
          return 'WNW'
        }
        if (grados >= 315 & grados < 337.5) {
          return 'NW'
        }
        if (grados >= 337.5 & grados < 360) {
          return 'NHW'
        }
    
    
      } */

  useEffect(() => {
    if (city) { getData() }
  }, [city])

  /*  const filterCity = (e) => {setValue((e.target.value).toLowerCase())}
   const searchNow = () => {setCity(value)} */

  return { dataFive }
}
