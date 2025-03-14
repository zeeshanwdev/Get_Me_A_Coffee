"use client"

import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

function Navbar() {

  const [showdropdown, setShowDropDown] = useState(false)

  const { data: session } = useSession()

  return (
    <nav className='bg-gray-800 text-white flex justify-between items-center h-16 px-16'>
      <div className="brand flex items-center gap-1">
        <span className='font-bold text-lg'><Link href={'/'}>Get Me a Coffee</Link></span>
        <span><lord-icon className="w-10 h-10" src="https://cdn.lordicon.com/tonguyuk.json" trigger="hover" state="hover-steam" colors="primary:#ebe6ef,secondary:#c69cf4,tertiary:#a66037"></lord-icon></span>
      </div>

      <div className='flex justify-between items-center gap-4 relative'>

        { session && <>
      <button onClick={()=>setShowDropDown(!showdropdown)} onBlur={()=>{setTimeout(()=>{setShowDropDown(false)},300)}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      
      <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} left-[125px] top-11 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <Link href={"/profile"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Profile</Link>
          </li>
          <li>
            <a href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</a>
            </li>
          <li>
          <Link href={"/"} onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
            </li>
        </ul>
      </div>
        </>}


      {!session && 
        <Link href={'/login'}>
      <button type="button" className="text-white hover:cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center">
        Login
      </button>
      </Link>
      }
      </div>

    </nav>
  )
}

export default Navbar

