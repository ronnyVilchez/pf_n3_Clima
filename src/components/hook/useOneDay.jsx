import { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../context/FilterContext'
import { DegreesContext } from '../../context/DegreesContext'

export const useOneDay = () => {

    const { city, setCity } = useContext(FilterContext)
    const [dataDay, setDataDay] = useState([])
    const [value, setValue] = useState('')
    const { deg } = useContext(DegreesContext)

    const getDatatwo = async () => {
        try {
            const rsday = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city? city : 'helsinki'}&appid=0b792af4110fe18dddb3b844b5ebeafd&${deg? deg : 'units=metric'}`)
            const resultday = await rsday.json()
            setDataDay(resultday)

        } catch (error) {
            setCity('helsinki')
            alert('Direccion no disponible')
        }

    }

    useEffect(() => {
       
            getDatatwo()
            console.log(city);
        
    }, [city,deg])

    const filterCity = (e) => { setValue((e.target.value).toLowerCase()) }
    const searchNow = () => { setCity(value) }

    return { dataDay, filterCity, searchNow, city }
}
