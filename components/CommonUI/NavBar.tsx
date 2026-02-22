import Link from 'next/link'
import React from 'react'
import { Bell } from 'lucide-react';
import { Layers2 } from 'lucide-react';

const NavBar = () => {
  return (
    <div className='flex justify-between px-25 py-4 border-[ffffff ] bg-secondary sticky top-0 z-10'>
     
        <div className='flex items-center gap-2'>
          <div className='h-13 w-10 rounded-3xl bg-primary flex items-center justify-center'><Layers2 fill='white' /></div>
          <h1 className='font-bold text-white text-xl'><Link href={"#"}>ATSPro</Link></h1>
          <span className='text-xs text-[#3c3cf4]'>AI</span>
        </div>

      <div className='flex items-center'>
          <ul className='flex items-center gap-5'>
            <Link href={"#"}><li className=' font-medium  text-white transition-all duration-300'>Home</li></Link>
            <Link href={"#features"}><li className=' font-medium text-white hover:text-primary transition-colors opacity-70'>Features</li></Link>
           
            <Link href={"#howItWorks"}><li className=' font-medium text-white hover:text-primary transition-colors opacity-70'>How It works</li></Link>
            <Link href={"#pricing"}><li className=' font-medium text-white hover:text-primary transition-colors opacity-70'>Pricing</li></Link>
            <Link href={"#testimonial"}><li className=' font-medium text-white hover:text-primary transition-colors opacity-70'>Testimonial</li></Link>
          </ul>
        </div>
      <div className='flex gap-5 items-center'>
        
        <div className='h-8 w-8 rounded-full bg-[#5484f8]'></div>
      </div>

    </div>
  )
}

export default NavBar
