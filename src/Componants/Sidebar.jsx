import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate =useNavigate()
  function logout (){
    localStorage.clear()
    navigate('/login')
    
  }
  return (
    <>
      <div className='flex h-screen p-4 rounded-lg ' >
        <div className='w-64 bg-slate-100 text-black p-4 rounded-3xl space-y-12 space-x-8 xl:block hidden'>
          <div className='h-20'></div>
          <div className='text-center space-y-8 '>
            <div className=' hover:bg-slate-300 w-fit px-4 py-3 rounded-lg'>
              <Link to="/login">HomePage</Link>
            </div>
            <div className=' hover:bg-slate-300 w-fit px-4 py-3 rounded-lg'><Link to="/login">About us</Link></div>
            <div className=' hover:bg-slate-300 w-fit px-4 py-3 rounded-lg'><Link to="/AddQuery">Add query</Link>
            </div>
            <div className=' hover:bg-slate-300 w-fit px-4 py-3 rounded-lg'>
              <Link to="/">Query</Link>
            </div>
            <div className=' hover:bg-slate-300 w-fit px-4 py-3 rounded-lg cursor-pointer' onClick={logout} >Log Out</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
