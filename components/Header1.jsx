import Image from 'next/image'
import React from 'react'
import Block from './Block'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const Header1 = () => {
  let auth;
  if(typeof window !== 'undefined') {
    auth = Cookies.get("user");
  }

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user")
    router.push("/");
  }

  return (
    <div className='flex justify-between border-b-2 border-gray-300 items-center h-24 px-10'>
        <Image src='/logo.png' alt="Oyo Logo" width={200} height={200} className='w-28 h-28' />
        <div className='h-full flex'>
            <Block title={'Become a Member'} para={'Additional 10% off on stays.'} />
            <Block title={'OYO for business'} para={'Trusted by 5000 corporates.'} />
            <Block title={'List your property'} para={'Start earning in 30 mins.'} />
            <Block title={'7979064070'} para={'Call us to book now.'} />
            <div className='flex items-center px-3'>
                <Image src="./demo.svg" alt="demo" width={200} height={200} className='w-10 h-10 rounded-full mr-5' />
                {
                  auth ?
                      <h3 className='font-bold cursor-pointer' onClick={handleLogout}>Logout</h3>
                    : (
                    <Link href="/login">
                      <h3 className='font-bold'>Login / Signup</h3>
                    </Link>
                  )
                }
            </div>
        </div>
    </div>
  )
}

export default Header1