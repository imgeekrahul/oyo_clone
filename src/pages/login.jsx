import Head from 'next/head'
import React from 'react'

const Login = () => {
  return (
    <div>
        <Head>
            <title>OYO - Login</title>
        </Head>
        <div className='flex h-screen justify-center items-center'>
            <div className='flex justify-center w-9/12'>
                <div>
                    <p className='font-bold text-5xl text-justify'>There's a smarter way to OYO around.</p>
                    <p className='text-2xl mt-5 text-justify'>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
                </div>
                <div className='ml-5 w-10/12 border-2 border-red-500'>
                    <p className='h-10 flex items-center px-10 bg-gradient-to-r from-red-300 to bg-red-600 text-lg font-bold text-white'>Sign up & Get Rs. 500 OYO Money</p>
                    <div className='px-10'>
                        <h3 className='text-5xl font-bold my-5'>Login / Signup</h3>
                        <p className='font-bold text-sm mb-1'>Please enter your phone number to continue.</p>
                        <input type="email" placeholder='Enter your email...' className='outline-none border border-black px-3 py-1 w-96 h-10' />
                        <button type="submit" className='w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg'>Verify Email</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login