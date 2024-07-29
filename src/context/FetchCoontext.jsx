import React, { createContext, useEffect, useState } from 'react'
import { useOneDay } from '../components/hook/useOneDay'
import { useFiveDays } from '../components/hook/useFiveDays'


export const FetchCoontext = createContext()


export const FetchProvider = ({ children }) => {
  const [value, setValue] = useState('')
  const [city, setCity] = useState('madrid')

/*   useEffect(() => {
    setCity('madrid')
}, []) */

  const { dataDay } = useOneDay()
  const { dataFive } = useFiveDays()



  const filterCity = (e) => { setValue((e.target.value).toLowerCase()) }
  const searchNow = () => { setCity(value) }

  return (
    <FetchCoontext.Provider value={{ dataDay, filterCity, searchNow, dataFive, city: city || 'madrid' }}>
      {children}
    </FetchCoontext.Provider>
  )
}
