import React,{useState,useEffect} from 'react'
import articles from './articles'

export default function Navbar() {
  return (
    <>
      <div className='flex gap-2 px-2'>
        <button className='rounded-full  py-2 px-4 font-semibold  hover:bg-blue-600 hover:text-white bg-blue-200'>New York</button>
        <button className='rounded-full   py-2 px-4 font-semibold hover:bg-blue-600 hover:text-white bg-blue-200'>Mumbai</button>
        <button className='rounded-full   py-2 px-6 font-semibold hover:bg-blue-600 hover:text-white bg-blue-200'>Paris</button>
        <button className='rounded-full   py-2 px-4 font-semibold hover:bg-blue-600 hover:text-white bg-blue-200'>London</button>
      </div>
    </>
  )
}
