import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className='flex h-screen p-4 rounded-lg' >
        <div className='w-64 bg-slate-100 text-black p-4 rounded-3xl space-y-12 space-x-8 '>
          <div >Logo</div>
          <div className='text-center'>
            <div className=' hover:bg-slate-300 w-fit px-4 py-3 rounded-lg'>
              <Link to="/login">HomePage</Link>
            </div>
            <div className=' hover:bg-slate-300 w-fit px-4 py-3 rounded-lg'><Link to="/login">About us</Link></div>
            <div className=' hover:bg-slate-300 w-fit px-4 py-3 rounded-lg'>Add on
            </div>
            <div className=' hover:bg-slate-300 w-fit px-4 py-3 rounded-lg'>
              <Link to="/">Query</Link>
            </div>
            <div className=' hover:bg-slate-300 w-fit px-4 py-3 rounded-lg'>Log Out</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
