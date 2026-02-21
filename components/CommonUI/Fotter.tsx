import Link from 'next/link'
import React from 'react'

const Fotter = () => {
  return (
    <section className='my-20  '>
        <div className='py-20 border px-25  border-white/5'>

       
        <div className='grid grid-cols-4 gap-5'>
            <div className='space-y-5'>
                <h1 className='text-2xl font-bold'>ATSPro</h1>
                <p className='text-slate-500 max-w-65'>Helping professionals bypass automated filters and
                        land their dream roles since 2023.</p>
            </div>
            <div className='space-y-4'>
                <div className='font-bold text-lg'>Product</div>
                <ul className='space-y-3'>
                    <li className='text-slate-400 hover:text-primary transition-colors'><Link href={"#"}>Resume Scan</Link></li>
                    <li className='text-slate-400 hover:text-primary transition-colors'><Link href={"#"}>Ai Rewriter</Link></li>
                    <li className='text-slate-400 hover:text-primary transition-colors'><Link href={"#"}>Keywords</Link></li>
                    <li className='text-slate-400 hover:text-primary transition-colors'><Link href={"#"}>Pricing</Link></li>
                </ul>
            </div>
            <div className='space-y-4'>
                <div className='font-bold text-lg'>Company</div>
                <ul className='space-y-3'>
                    <li className='text-slate-400 hover:text-primary transition-colors'><Link href={"#"}>About US</Link></li>
                    <li className='text-slate-400 hover:text-primary transition-colors'><Link href={"#"}>Success Stories</Link></li>
                    <li className='text-slate-400 hover:text-primary transition-colors'><Link href={"#"}>Careers</Link></li>
                    <li className='text-slate-400 hover:text-primary transition-colors'><Link href={"#"}>Blog</Link></li>
                </ul>
            </div>
            <div className='space-y-4'>
                <div className='font-bold text-lg'>Support</div>
                <ul className='space-y-3'>
                    <li className='text-slate-400 hover:text-primary transition-colors'><Link href={"#"}>Help Center</Link></li>
                    <li className='text-slate-400 hover:text-primary transition-colors'><Link href={"#"}>Contact</Link></li>
                    <li className='text-slate-400 hover:text-primary transition-colors'><Link href={"#"}>Teams</Link></li>
                    <li className='text-slate-400 hover:text-primary transition-colors'><Link href={"#"}>Privacy</Link></li>
                </ul>
            </div>

        </div>
         </div>
         <div className='flex justify-between px-25 py-10 '>
            <p className='text-slate-400'>© 2026 ATSPro AI. All rights reserved.</p>
            <div className='text-slate-400 flex gap-3'>
                <span className="material-symbols-outlined">alternate_email</span>
                <span className="material-symbols-outlined">share</span>
                <span className="material-symbols-outlined">public</span>
            </div>
         </div>
    </section>
  )
}

export default Fotter
