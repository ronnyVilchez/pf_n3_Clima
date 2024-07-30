import React from 'react'
import { Aside } from './components/Aside'
import { Body } from './components/Body'

export default function App() {
 
  return (
    <div className='flex flex-col sm:flex-row w-full h-screen sm:w-full font-figma text-[#E7E7EB]'>
      <Aside />
      <Body />
    </div>
  )
}


