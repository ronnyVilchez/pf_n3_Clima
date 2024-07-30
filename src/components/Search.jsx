import React, { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export const Search = () => {

    const {filterCity, searchNow,positionSearch} = useContext(FilterContext)
    
    return (
        <div className="search">
            <input type="search" onChange={filterCity} />
            <button onClick={searchNow}> Buscar </button>
            <button onClick={positionSearch}> Position</button>
        </div>
    )
}
