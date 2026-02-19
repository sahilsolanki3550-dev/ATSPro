import Link from 'next/link'
import React from 'react'
import { Bell } from 'lucide-react';

const NavBar = () => {
  return (
    <div className='flex justify-between px-10 py-5 border-[ffffff ] bg-[#14142a]'>
      <div className='flex gap-5'>
        <div className='flex'>
          <div>Logo</div>
          <h1 className='font-bold text-white text-xl'><Link href={"./"}>ATSPro</Link></h1>
          <span className='text-xs text-[#3c3cf4]'>AI</span>
        </div>

        <div className='flex items-center'>
          <ul className='flex items-center gap-5'>
            <Link href={"/dashboard"}><li className='text-sm font-medium  text-white'>Dashboard</li></Link>
            <Link href={"#"}><li className='text-sm font-medium text-white hover:text-primary transition-colors opacity-70'>My Resumes</li></Link>
            <Link href={"#"}><li className='text-sm font-medium text-white hover:text-primary transition-colors opacity-70'>Job Tracker</li></Link>
            <Link href={"#"}><li className='text-sm font-medium text-white hover:text-primary transition-colors opacity-70'>Premium</li></Link>
          </ul>
        </div>
      </div>

      <div className='flex gap-5 items-center'>
        <input className="bg-white/5 border-white/10 rounded-lg pl-10 pr-4 py-1.5 text-sm focus:ring-primary focus:border-primary w-64 text-white" placeholder="Quick search..." type="text"/>
         <Bell fill='grey' size={30} />
        <div className='h-8 w-8 rounded-full bg-[#5484f8]'></div>
      </div>

    </div>
  )
}

export default NavBar
