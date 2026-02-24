import { time } from 'console'
import { features, title } from 'process'
import React from 'react'
import PrimaryButton from '../Shared/PrimaryButton'

// interface PlanFeature{
   
//     title:string
// }

const PricingSection = () => {

    const PlanFetures =[
        "Unlimited Resume Scans",
        "Advanced AI Suggestions",
        "kill Gap Analytics",
        "Priority Support"
    ]
  return (
    <section className='md:my-40 space-y-13 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] scroll-mt-24' id='pricing'>
        <div className='text-center space-y-4'>
            <h1 className='text-4xl font-black transition-all duration-500 hover:tracking-tight'>Simple, Transparent Pricing</h1>
            <p className='text-slate-400 transition-all duration-500 hover:text-slate-300'>Invest in your career with a plan that fits your job search pace.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div></div>
            <div className='bg-primary/10 border-2 border-primary p-10 rounded-2xl space-y-5 shadow-[0_0_20px_rgba(60,60,246,0.3)] transition-all duration-300 hover:-translate-y-5 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(60,60,246,0.5)]'>
                <div className='space-y-2'>
                    <h2 className='text-xl font-bold transition-all duration-300 hover:text-primary'>Free</h2>
                    <p className='text-slate-400 text-sm transition-all duration-300 hover:text-slate-300'>For the active candidate</p>
                </div>
                
                <h1 className='text-4xl font-black mb-10 transition-all duration-500 hover:scale-105'>$0 <span className='text-base font-normal text-slate-500 -ml-2'>/month</span></h1>
                
                    <ul className='space-y-4'>

                        {PlanFetures.map((feature,index)=>(

                            
                            <li key={index} className='flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-2 hover:text-white'>
                            <span className="material-symbols-outlined mt-1  text-primary text-xl transition-transform duration-300 hover:scale-125">check
                                </span> {feature}
                        </li>
                        ))}
                    </ul>   
                
                <div>
                    <PrimaryButton name='Start Free' className='w-full'/>
                </div>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default PricingSection