import React from 'react'

const LoginPage = () => {
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
                
                    <input className='w-full px-4 py-3 border border-gray-300 rounded-xl' type="Email" placeholder='Enter email to get started' />
                
                
                    <input className='w-full px-4 py-3 border border-gray-300 rounded-xl mt-4' type="Password" placeholder='**********' />
                
                <button className='w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl mt-4 hover:bg-sky-800 focus:outline-none'>Login</button>
                
            </div>
            </div>

        </div>
    )
}

export default LoginPage
