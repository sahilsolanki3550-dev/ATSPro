"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Bell } from 'lucide-react';
import { Layers2 } from 'lucide-react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    
    <div className='flex justify-between px-5 md:px-25 py-4 border-[ffffff ] bg-secondary sticky top-0 z-10'>

        

        <div className='flex items-center gap-2'>
          <div className='h-13 w-10 rounded-3xl bg-primary flex items-center justify-center'><Layers2 fill='white' /></div>
          <h1 className='font-bold text-white text-xl'><Link href={"#"}>ATSPro</Link></h1>
          <span className='text-xs text-[#3c3cf4]'>AI</span>
        </div>

        
      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center">
        {open ? (
          <>
          <X className="text-white cursor-pointer " onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 w-full bg-secondary flex flex-col gap-4 p-5 md:hidden transition-all duration-300">
          <Link href="#home" onClick={() => setOpen(false)} className="text-white">Home</Link>
          <Link href="#features" onClick={() => setOpen(false)} className="text-white">Features</Link>
          <Link href="#howItWorks" onClick={() => setOpen(false)} className="text-white">How It works</Link>
          <Link href="#pricing" onClick={() => setOpen(false)} className="text-white">Pricing</Link>
          <Link href="#testimonial" onClick={() => setOpen(false)} className="text-white">Testimonial</Link>
        </div>
        </>
        ) : (
          <>
          <Menu className="text-white cursor-pointer" onClick={() => setOpen(true)} />
          
          </>
        )}
      </div>
      
        {/* </div> */}

        <div className='md:flex md:items-center hidden '>
          <ul className='flex items-center gap-5'>
            <Link href={"#"}><li className=' font-medium  text-white transition-all duration-300'>Home</li></Link>
            <Link href={"#features"}><li className=' font-medium text-white hover:text-primary transition-colors opacity-70'>Features</li></Link>
           
            <Link href={"#howItWorks"}><li className=' font-medium text-white hover:text-primary transition-colors opacity-70'>How It works</li></Link>
            <Link href={"#pricing"}><li className=' font-medium text-white hover:text-primary transition-colors opacity-70'>Pricing</li></Link>
            <Link href={"#testimonial"}><li className=' font-medium text-white hover:text-primary transition-colors opacity-70'>Testimonial</li></Link>
          </ul>
        </div>
        <div className='md:flex gap-5 items-center hidden'>
          
          <div className='h-8 w-8 rounded-full bg-[#5484f8]'></div>
        </div>

        
    </div>
  )
}

export default NavBar
