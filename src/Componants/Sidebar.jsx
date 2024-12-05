import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className='flex h-screen p-4 rounded-lg' >
        <div className='w-64 bg-slate-100 text-black p-4 rounded-3xl space-y-12 space-x-8 '>
          <div className='space-x-4'>Logo</div>
          <div>HomePage</div>
          <div>About us</div>
          <div>Add on</div>
          <div>Query</div>
          <div>Log Out</div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
