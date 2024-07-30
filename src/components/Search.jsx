import React, { useContext } from 'react'
import { useOneDay } from './hook/useOneDay'
import { FilterContext } from '../context/FilterContext'

export const Search = () => {

    const {filterCity, searchNow} = useContext(FilterContext)
    
    return (
        <div className="search">
            <input type="search" onChange={filterCity} />
            <button onClick={searchNow}> Buscar </button>
        </div>
    )
}
