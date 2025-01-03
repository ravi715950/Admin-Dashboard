import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import QueryPanel from './QueryPanel'
import { useNavigate } from 'react-router-dom'

function Navbar() {
const navigate = useNavigate()
  useEffect(() => {
   if(!localStorage.getItem("myToken")){
    navigate("/login")
   }
  })
  
  return (
    <div className='flex gap-2 h-screen relative '>
      <Sidebar/>
      <div className='w-full'>
      <div className='p-4'>
      <div className='text-2xl font-bold'><h2> Hello Admin Panel 👋</h2></div>
      <div className='font-light'><h1>Good Morning</h1></div>
      </div>
     <QueryPanel/>
      </div>

    </div>
  )
}

export default Navbar
