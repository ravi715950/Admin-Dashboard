import React from 'react'
import Sidebar from './Sidebar'
import QueryPanel from './QueryPanel'

function Navbar() {
  return (
    <div className='flex gap-5 h-screen'>
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
