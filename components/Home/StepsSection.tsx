import React from 'react'
import { FileText } from 'lucide-react';
import { Upload } from 'lucide-react';

const StepsSection = () => {
  return (
    <section className='my-30 text-white space-y-20'>
        <div className='text-center space-y-5'>
            <h3 className='text-4xl font-black text-[#ffffff]'>Three Steps to Interview Invitations</h3>
            <p className='text-slate-400 text-xl'>Our streamlined process takes less than 30 seconds to get
                    you actionable feedback.</p>
        </div>
        <div className='grid grid-cols-3 gap-10'>
            <div className='flex flex-col items-center text-center space-y-6 relative'>
                <div className='w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 transition-all'>
                <FileText color='blue' strokeWidth={2} size={40}/>
                </div>
                <div className='space-y-3'>
                <h3 className='text-xl font-bold'>Paste Job Description</h3>
                <p className='text-slate-400 max-w-100'>Copy the full job post requirements from LinkedIn, Indeed, or any career page</p>
                </div>
            </div>
             <div className='flex flex-col items-center text-center space-y-6 relative group'>
                <div className='w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 transition-all '>
                <Upload color='blue'  strokeWidth={2} size={40}/>
                </div>
                <div className='space-y-3'>
                <h3 className='text-xl font-bold'>Upload Resume</h3>
                <p className='text-slate-400 max-w-90'>Drag and drop your PDF or DOCX file. Our AI parses structured
                            and unstructured data.</p>
                </div>
            </div>
             <div className='flex flex-col items-center text-center space-y-6 relative group'>
                <div className='w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 transition-all'>
                <FileText color='blue' strokeWidth={2} size={40}/>
                </div>
                <div className='space-y-3'>
                <h3 className='text-xl font-bold'>Get ATS Score</h3>
                <p className='text-slate-400 max-w-90'>Receive a comprehensive report with match percentage, missing
                            keywords, and suggestions.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StepsSection
