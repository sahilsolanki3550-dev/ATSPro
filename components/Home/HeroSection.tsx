import React from 'react'
import { ArrowRight } from 'lucide-react';
import { Sparkles } from 'lucide-react'
import { TrendingUp } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { Check } from 'lucide-react';
import { Plus } from 'lucide-react';
import { TriangleAlert } from 'lucide-react';
import { Layers2 } from 'lucide-react';
import Link from 'next/link';



const HeroSection = () => {
  return (
    <section className='mx-auto grid grif-cols-1 md:grid-cols-2 '>
      <div className="absolute top-0 right-0 -z-10 w-125 h-125 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-75 h-75 bg-purple-600/10 rounded-full blur-[100px]">
        </div>
      <div className='space-y-5 text-center md:text-left'>
        <div className='text-primary items-center justify-center uppercase bg-[#3B82F61A] py-1 px-4 rounded-full flex gap-1 w-60'>
          <Sparkles size={17} fill='blue' strokeWidth={1}/>
          <span >AI-Powered Precision</span>

        </div>
        <h1 className='text-5xl text-center md:text-left md:text-7xl md:leading-20 font-black '><span className='text-white '>Beat the ATS.</span><br /><span className=' bg-clip-text text-transparent bg-linear-to-r from-primary to-purple-400'>Land More <br />Interviews.</span></h1>
        <p className='md:text-lg text-slate-400 md:max-w-lg '>Upload your resume, paste the job description, and instantly see how well you match. Our AI identifies gaps and gives you the exact keywords to rank higher.</p>

        <div className='flex justify-center md:justify-start gap-3 md:gap-5'>
          <Link href={"./dashboard"}  className='bg-primary hover:bg-primary/90 cursor-pointer text-white px-3 sm:px-4 md:px-8 md:py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all space-x-2'>
            <span>Analyze Resume</span>
            <ArrowRight strokeWidth={2.5} />
          </Link>
          <button className='bg-[#ffffff08] px-3 sm:px-4 py-3 md:px-8 md:py-4 cursor-pointer rounded-full font-bold text-lg hover:bg-white/5  border-2 border-[#ffffff1a] transition-all text-white backdrop:blur-xl'>See Demo</button>
        </div>
        <div className='py-2 flex items-center gap-5 md:gap-8 my-15 md:my-0'>
          <div className='flex -space-x-3'>
            <div className='h-10 w-10 bg-[#fbe6d3] rounded-full border border-[#0a0a20] '></div>
            <div className='h-10 w-10 bg-[#fbe6d3] rounded-full border border-[#0a0a20] '></div>
            <div className='h-10 w-10 bg-[#fbe6d3] rounded-full border border-[#0a0a20] '></div>
          </div>
          <p className=' text-slate-500 font-medium'><span className='text-white'>1,200+</span> professionals landed jobs this week</p>
        </div>
      </div>


      <div className='flex items-center justify-center opacity-80 mt-10 md:mt-0'>
        <div className='bg-[#14142c] rounded-4xl  relative p-4 pt-9 md:p-8  shadow-2xl border border-[#FFFFFF1A] '>
          
        <div className='h-18 w-16 absolute -top-10 rounded-xl -right-4 md:-right-5 bg-[#171736] border border-blue-950 flex items-center justify-center'>
          <TrendingUp color='blue' strokeWidth={2} size={30}/>
        </div>
          <div className='flex justify-between items-center mb-8'>
            <div className='flex items-center gap-3'>
              <div className='h-3 w-3 bg-red-500 rounded-full'></div>
              <div className='h-3 w-3 bg-yellow-500 rounded-full'></div>
              <div className='h-3 w-3 bg-green-500 rounded-full'></div>
            </div>
            <h3 className='textfont-mono text-slate-500 uppercase'>Analysis complete</h3>
          </div>

          <div className='grid grid-cols-12 gap-4 md:gap-6'>
            {/* left */}
            <div className='col-span-6 bg-[#3B82F61A] rounded-2xl md:p-6 flex flex-col items-center justify-center border border-[#FFFFFF1A]'>
              <span className='text-5xl md:text-6xl font-bold text-primary'>82%</span>
              <span className='text-[10px] uppercase font-bold text-slate-400 mt-2 tracking-widest'>Match Score</span>
            </div>

            {/* right */} 
            <div className=' col-span-6 space-y-3'>
              
              <div className='space-y-2'>
                <div className='flex justify-between text-slate-400 font-bold uppercase text-sm '>
                  <span className=''>Keywords</span>
                  <span>92%</span>
                </div>
                <div className='h-1.5 rounded-full bg-gray-500 '>
                  <div className="h-1.5 bg-green-500 rounded-full w-[92%]"></div>
                </div>

              </div>

              <div className='space-y-2'>

                <div className='flex justify-between text-slate-400 font-bold uppercase text-sm'>
                  <span className=''>Experience</span>
                  <span>75%</span>
                </div>
                <div className='h-1.5 rounded-full bg-gray-500'>
                  <div className="h-1.5 bg-primary rounded-full w-[75%]"></div>
                </div>

              </div>

              <div className='space-y-2'>

                <div className='flex justify-between text-slate-400 font-bold uppercase text-sm'>
                  <span className=''>Skills Match</span>
                  <span>88%</span>
                </div>
                <div className='h-1.5 rounded-full bg-gray-500'>
                  <div className="h-1.5 bg-purple-500  rounded-full w-[88%]"></div>
                </div>

              </div>
            </div>

            {/* Ai Insight */}
            <div className='col-span-12 bg-[#3B82F61A] p-3 md:p-5 rounded-3xl space-y-2    '>
              <div className='flex gap-2 items-center'><Lightbulb size={20} /><span className='uppercse text-white font-bold'>AI Insight</span></div>
              <ul className='space-y-2'>
                <li className='text-slate-300 flex gap-2  md:items-center'>
                  <div className='w-3.5 h-3.5  bg-green-500 rounded-full mt-1.5 flex items-center justify-center'><Check strokeWidth={3} className='object-cover' color='black'/></div>
                  <p>Strong matches found for: Python, React, Cloud Architecture.</p>
                </li>
                <li className='text-slate-300 flex gap-2 md:items-center'>
                  <div className='h-3.5 w-3.5 bg-primary rounded-full mt-1.5 flex justify-center items-center'>
                    <Plus color='black' strokeWidth={3} className='object-cover'/>
                  </div>
                  Recommendation: Add "Scalable Systems" to your summary.
                </li>
                <li className='text-slate-300 flex gap-2 md:items-center'>
                  <span className=' h-3.5 w-3.5 mt-1.5 flex justify-center items-center'>
                    <TriangleAlert color='black' fill='yellow' className='object-cover' />
                  </span>
                  Missing hard skill: AWS Lambda. Consider adding related experience.

                </li>
              </ul>
            </div>


          </div>
        </div>
      </div>


    </section>
  )
}

export default HeroSection

