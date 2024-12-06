import React from 'react'
import { items } from './Data'

function QueryPanel() {
  return (
    <>
  <div className='h-full border rounded-3xl'>
<div className='flex justify-between items-center m-5 border-b-2 pb-4'>
    <h1 className='text-3xl text-blue-600'>Query Panel</h1>
    <input className='px-4 py-3 border border-gray-300 rounded-xl'  type="text" placeholder='Search' />
</div>
<div>
<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>phone</th>
    <th>message</th>
  </tr>
{items.map((query)=>(
 <tr>
 <td>{query.name}</td>
 <td>{query.email}</td>
 <td>{query.phone}</td>
 <td>{query.message}</td>
</tr>
))} 
 
</table>
</div>
  </div>
    </>
  )
}

export default QueryPanel
