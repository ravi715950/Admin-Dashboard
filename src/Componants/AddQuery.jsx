import React from 'react'
import { useState } from 'react'

function AddQuery() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [phn, setPhn] = useState("")
  const [desc, setDesc] = useState("")
 const [loading,setLoading] = useState(false)
 async function getFormData(e) {
    e.preventDefault()
    setLoading(true)
    let payload = {
      name,
      email:mail,
      phone: phn,
      description: desc
    }
    console.log(payload)
    try {
      const response = await fetch('https://query-crud.onrender.com/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
      );
      setLoading(false)
      alert('Data added successfully');
      setName('')
      setMail('')
      setPhn('')
      setDesc('')

    
    } catch (error) {
      console.error('Error adding data:', error.message);
      setLoading(false)
    }
  }
  return (
    <form onSubmit={getFormData}>
      <div className='flex flex-col space-y-4 justify-items-center pt-40 max-w-sm mx-auto '>
        <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="Email" placeholder='Enter email' value={mail} onChange={(e) => setMail(e.target.value)} required />
        <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder='Enter phone' value={phn} onChange={(e) => setPhn(e.target.value)} required />
        <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder='Enter description' value={desc} onChange={(e) => setDesc(e.target.value)} required />
        <button disabled = {loading ? true : false} type='submit' className="border rounded-lg p-2 hover:bg-sky-800 hover:text-white focus:ring-2 focus:ring-blue-500"> 
          {loading ? "Loading..." : "Submit" }
        </button>
      </div>
    </form>
  )
}

export default AddQuery
