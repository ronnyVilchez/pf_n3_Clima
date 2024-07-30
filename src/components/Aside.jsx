import React from 'react'
import { Search } from './Search'
import { Today } from './Today'

export const Aside = () => {
  return (
    <div className='bg-[#1E213A] sm:w-[30%]'>
    <Search/>
    <Today/>
    </div>
  )
}
