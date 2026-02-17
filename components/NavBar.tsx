import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-white flex justify-between px-10 py-4 items-center shadow-lg'>
      <div className='font-bold text-2xl'>ATSPro</div>
      <div>
        <ul className='flex gap-5 '>
          <Link href={"#"} className='cursor-pointer hover:underline '>How it works</Link>
          <Link href={"#"} className='cursor-pointer hover:underline '>Pricing</Link>
          <Link href={"#"} className='cursor-pointer hover:underline '>About</Link>
        </ul>
      </div>

      <div className='flex gap-5 items-center'>
        {/* <div className='cursor-pointer'>Log In</div> */}
        <Link href={"#"} className='px-6 py-2 bg-blue-800 rounded-lg text-white cursor-pointer'>Get Started</Link>
      </div>
    </div>
  )
}

export default NavBar
