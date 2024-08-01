import React, { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export const Search = () => {

    const { filterCity, searchNow, modalToday, modal, valueSearch } = useContext(FilterContext)

    return (
        <div className={`${modal ? '' : 'hidden'} flex-col p-4 mb-[70%] sm:h-screen sm:px-8`}>
            <button onClick={modalToday} className='flex ml-auto text-[32px] mb-4'>x</button>
            <div className="flex flex-row w-full justify-between">
                <div className='flex flex-row gap-4 p-4 w-[268px] sm:w-[265px] h-[50px] border border-[#616475] items-center'>
                    <img src="/images/search.svg" alt="icon search" width={30} height={30} />
                    <input className='bg-transparent h-[30px] outline-none' type="search" placeholder='search location' onChange={filterCity} />
                </div>
                <button onClick={searchNow} className='bg-[#3C47E9] w-[86px] h-[50px]'> Search </button>
            </div>
            <div className="flex flex-col text-start">
                <div onClick={valueSearch} className="flex text-[18px] justify-between p-4 hover:border hover:border-[#616475]  cursor-pointer"><h2>London</h2> <span>{'>'}</span></div>

                <div onClick={valueSearch} className="flex text-[18px] justify-between p-4 hover:border hover:border-[#616475]  cursor-pointer"><h2>Barcelona</h2> <span>{'>'}</span></div>

                <div onClick={valueSearch} className="flex text-[18px] justify-between p-4 hover:border hover:border-[#616475] cursor-pointer"><h2>Long Beach</h2> <span>{'>'}</span></div>

            </div>
        </div>
    )
}
