import React, { useState } from 'react'
import { BsEye,BsEyeSlash } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    

    async function getData(e) {
        e.preventDefault();
       
       
        setLoading(true); 
    
        let payloader = {
            username,
            password,
        };
    
        console.log(payloader); 
    
        try {
            const response = await fetch('https://query-crud.onrender.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payloader),
            }); 
    
            setLoading(false); 
         
            if (response.ok) {
                const data = await response.json(); 
                alert('Logged in successfully');
                localStorage.setItem("myToken",data.token)
                navigate("/") 
                
            } else {
                const errorData = await response.json(); 
                alert(`Login failed: ${errorData.message || 'Unknown error'}`); 
                setPassword('')
                setUsername('')
            }
        } catch (error) {
            console.error('Error during login:', error.message); 
            alert('An error occurred. Please try again.');
            setPassword('')
                setPassword('') 
            setLoading(false); 
        }
    }
    
    return (
        <div className='grid xl:grid-cols-2 grid-cols-1 h-screen bg-white '>
            <div className='w-[110%] rounded p-4 xl:block hidden' >
                <img className='h-full  rounded-3xl ' src="https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D" alt="Placeholder" />
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-[350px]'>
                    <div className='text-4xl font-bold'>
                        <h2 className='mb-2 '>Welcome  👋</h2>
                    </div>
                    <div className=' font-sans '>
                        <p className='mb-8'>Please login here</p>
                    </div>
                    <form onSubmit={getData}>
                         
                        <input className='w-full px-4 py-3 border border-gray-300 rounded-xl' name="email"  type="text" placeholder='Enter email to get started' value={username} onChange={(e) => setUsername(e.target.value)} />
                      


                        <input className='w-full px-4 py-3 border border-gray-300 rounded-xl mt-4'  type={show ? "text" : "password"} placeholder='**********' value={password} onChange={(e) => setPassword(e.target.value)} />
                      
                        <h6  className='cursor-pointer' onClick={ ()=>setShow(!show)}>
                          
                            {show ? (
                                <BsEye className='w-[650px] transform -translate-y-8'/>
                            ):(
                                <BsEyeSlash  className='w-[650px] transform -translate-y-8'/>
                            )}
                        </h6>
            

                        <button type='submit' className='w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl mt-4 hover:bg-sky-800 focus:outline-none'>Login</button>
                    </form >
                </div>
            </div>

        </div>
    )
}

export default LoginPage
