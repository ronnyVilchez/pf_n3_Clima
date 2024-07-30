import React, { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export const Search = () => {

    const { filterCity, searchNow } = useContext(FilterContext)

    return (
        <div className="hidden flex-col">
            <button className='flex text-end text-[18px]'>x</button>
            <div className="flex flex-row w-full justify-between">
                <input type="search" placeholder='search location' onChange={filterCity} />
                <button onClick={searchNow}> Search </button>
            </div>
            <div className="flex flex-col text-start px-4">
                <h2>London</h2>
                <h2>Barcelona</h2>
                <h2>Long Beach</h2>
            </div>
        </div>
    )
}
