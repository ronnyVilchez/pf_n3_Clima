import { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../context/FilterContext'

export const useFiveDays = () => {

  const [dataFive, setDataFive] = useState([])


  const { city, setCity } = useContext(FilterContext)

  const getData = async () => {

    try {
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
    } catch (error) {
      setCity('helsinki')
      alert('Direccion no disponible')
    }

  }

  useEffect(() => {
    if (city) { getData() }
  }, [city])

  return { dataFive }
}
