import React, { useEffect } from 'react'
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";

function QueryPanel() {
  const  [query, setQuery] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const fetchData= async()=>{
      const data = await fetch("https://query-crud.onrender.com/api/query");
      const result = await data.json();
      const filterData = result.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
      setQuery(filterData)
        }
      
        fetchData();
  }, [search])
  

  console.log(search)
  return (
    <>
  <div className='h-full border rounded-3xl mx-5 '>
<div className='flex justify-between items-center m-5 border-b-2 pb-4 '>
    <h1 className='text-3xl text-blue-600'>Query Panel</h1>
    <input  value={search} onChange={(e)=>setSearch(e.target.value)}  className='px-4 py-3 border border-gray-300 rounded-xl'  type="text" placeholder='Search' />
    <span className="absolute top-35 right-8 transform -translate-x-1/2 text-gray-500"><CiSearch size={20}/></span>
</div>
<div className=' p-5 w-full overflow-x-scroll'>
<table className='w-full'>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>phone</th>
    <th>message</th>
  </tr>
{query.map((user)=>(
 <tr>
 <td>{user.name}</td>
 <td>{user.email}</td>
 <td>{user.phone}</td>
 <td>{user.description}</td>
</tr>
))} 
 
</table>
</div>
  </div>
    </>
  )
}

export default QueryPanel
