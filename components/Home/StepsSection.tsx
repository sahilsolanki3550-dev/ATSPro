import React from 'react'
import { FileText } from 'lucide-react';
import { Upload } from 'lucide-react';

const StepsSection = () => {
  return (
    <section className='md:my-30 text-white space-y-20 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] scroll-mt-24' id='howItWorks'>
        <div className='text-center space-y-5'>
            <h3 className='text-4xl font-black text-[#ffffff] transition-all duration-500 hover:tracking-tight'>Three Steps to Interview Invitations</h3>
            <p className='text-slate-400  text-[18px] md:text-xl transition-all duration-500 hover:text-slate-300'>Our streamlined process takes less than 30 seconds to get
                    you actionable feedback.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className='flex flex-col items-center text-center space-y-6 relative transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]'>
                <div className='w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30'>
                <FileText color='blue' strokeWidth={2} size={40}/>
                </div>
                <div className='space-y-3'>
                <h3 className='text-xl font-bold transition-all duration-300 hover:text-primary'>Paste Job Description</h3>
                <p className='text-slate-400 max-w-100 transition-all duration-300 hover:text-slate-300'>Copy the full job post requirements from LinkedIn, Indeed, or any career page</p>
                </div>
            </div>
             <div className='flex flex-col items-center text-center space-y-6 relative group transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]'>
                <div className='w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30'>
                <Upload color='blue'  strokeWidth={2} size={40}/>
                </div>
                <div className='space-y-3'>
                <h3 className='text-xl font-bold transition-all duration-300 hover:text-primary'>Upload Resume</h3>
                <p className='text-slate-400 max-w-90 transition-all duration-300 hover:text-slate-300'>Drag and drop your PDF or DOCX file. Our AI parses structured
                            and unstructured data.</p>
                </div>
            </div>
             <div className='flex flex-col items-center text-center space-y-6 relative group transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]'>
                <div className='w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30'>
                <FileText color='blue' strokeWidth={2} size={40}/>
                </div>
                <div className='space-y-3'>
                <h3 className='text-xl font-bold transition-all duration-300 hover:text-primary'>Get ATS Score</h3>
                <p className='text-slate-400 max-w-90 transition-all duration-300 hover:text-slate-300'>Receive a comprehensive report with match percentage, missing
                            keywords, and suggestions.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StepsSection