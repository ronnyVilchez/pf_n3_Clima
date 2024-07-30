import { createContext, useState } from "react";

export const FilterContext = createContext()

export const FilterProvider = ({children})=>{
    const [value, setValue] = useState('')
    const [city, setCity] = useState('london')
  
    const filterCity = (e) => { setValue((e.target.value).toLowerCase()) }
    const searchNow = () => { setCity(value) }
   
    return (
        <FilterContext.Provider  value={{filterCity, searchNow, city}}>
            {children}
        </FilterContext.Provider>
    )
}