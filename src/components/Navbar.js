import React,{useState,useEffect} from 'react'
import articles from './articles'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className='flex gap-2 px-2'>
       <Link to="/" className='rounded-full py-2 px-4 font-semibold  hover-text-white bg-blue-400'>All</Link>
        <Link to="/paris" className='rounded-full py-2 px-4 font-semibold hover-text-white bg-blue-400'>Paris</Link>
        <Link to="/london" className='rounded-full py-2 px-4 font-semibold  hover-text-white bg-blue-400'>London</Link>

      </div>
    </>
  )
}
