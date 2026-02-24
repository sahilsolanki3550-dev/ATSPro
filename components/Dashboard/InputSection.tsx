'use client'
import { useState } from 'react'
import { optimize } from '../../actions/actions'
// import pdfToText from 'react-pdftotext';
import { AiResponse } from '@/types/type';
import { FileText, Sparkles } from 'lucide-react';
import { Upload } from 'lucide-react';
import ResultSection from './ResultSection';
// import {useDropzone} from 'react-dropzone'

const InputSection = () => {

    const [result, setResult] = useState<AiResponse>()
    const [loading, setLoading] = useState(false)
    
   const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
        setLoading(true)

        const formData = new FormData(e.currentTarget)

        const job_description = formData.get("job_description") as string
        const file = formData.get("file") as File

        if (!job_description) {
            alert("Enter job description")
            return
        }

        if (!file) {
            alert("Plese Upload Resume")
            return
        }

        const pdfToText = (await import("react-pdftotext")).default
        const resume_text = await pdfToText(file)

        const response = await optimize(job_description, resume_text)

        if (!response) {
            alert("Error")
            return
        }

        setResult(response)

    } catch (error) {
        console.log(error)
    } finally {
        setLoading(false)
    }
}   

    return (
        <section className='opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards] transition-all duration-500'>
            <div>

            <div className='space-y-8'>
                <div className='space-y-2 px-2'>
                    <h1 className='text-white font-bold text-3xl transition-all duration-500 hover:tracking-tight'>Resume Analyzer</h1>
                    <p className='text-gray-500 text transition-all duration-300 hover:text-gray-400'>Upload your resume and target job description to get instat AI feedback.</p>
                </div>

                <div>
                        <form onSubmit={handleSubmit} className='space-y-8'>
                            <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='bg-secondary rounded-4xl py-5 px-5 md:py-6 md:px-7 space-y-5 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1'>
                                
                                <div className='flex justify-between items-center'>    
                                    <h3 className='text-white font-semibold flex gap-2 text-lg items-center transition-all duration-300 hover:text-primary'>
                                        <FileText size={23} color='blue'  /> Job Description
                                    </h3>
                                    <span className='text-gray-600 uppercase font-semibold'>Required</span>
                                </div>

                                <textarea
                                    className='rounded-xl px-5 py-2 min-h-50 w-full border-[#FFFFFF0D] shadow placeholder:text-gray-500 placeholder:text-lg text-white bg-[#101022] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-lg focus:shadow-primary/20'
                                    name='job_description'
                                    placeholder='Paste the full job requirements, responsibilities and qualification here...'
                                />
                            </div>

                             <div className='bg-secondary rounded-4xl py-5 px-5 md:py-6 md:px-7  space-y-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1'>
                                
                                <div className='flex justify-between items-center'>    
                                    <h3 className='text-white font-semibold flex gap-2 text-lg items-center transition-all duration-300 hover:text-primary'>
                                        <Upload size={23} color='blue'/> Upload Resume
                                    </h3>
                                    <span className='text-gray-600 uppercase font-semibold'>Pdf Only</span>
                                </div>                                

                                <div>
                                    <label htmlFor="file">
                                        <input type="file" className="hidden" name='file' id='file' />
                                        
                                        <div className='border-2 border-dashed border-[#FFFFFF1A] rounded-4xl py-10 text-center items-center flex flex-col justify-center space-y-5 cursor-pointer hover:bg-[#1c1c42] transition-all duration-300 hover:border-primary hover:scale-[1.02]'>
                                            <div>
                                                <span className='h-15 w-15 bg-[#1c1c42] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20'>
                                                    <Upload size={23} color='blue' strokeWidth={3}/>
                                                </span>
                                            </div>
                                            <div>
                                                <span className='text-white opacity-70 text-lg font-semibold transition-all duration-300 hover:opacity-100'>
                                                    Drag and drop your files hear <br/>
                                                </span>
                                                <div>
                                                    <span className='text-white opacity-50'>or</span>
                                                    <span className='text-primary text-[16px] opacity-99 transition-all duration-300 hover:underline'> browse yout computer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            </div>

                            <div className='flex justify-center px-2'>
                                <button
                                    type='submit'
                                    disabled={loading}
                                    className='px-10 py-4 w-full md:max-w-150 bg-primary flex gap-2 text-white rounded-full items-center justify-center cursor-pointer hover:bg-[#1f1fd2] transition-all duration-300 ease-out font-semibold text-[20px] hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95'
                                >
                                    <Sparkles fill='white' strokeWidth={1}/> 
                                    {loading ? "Analyzing..." : "Analyze Now"}
                                </button>
                            </div>    
                        </form>
                </div>

            </div>
        </div>

        {result &&  
            <div className='animate-[fadeInUp_0.6s_ease-out_forwards] transition-all duration-700'>
                <ResultSection result={result}/>
            </div>
        }

        {loading && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
            <div className="w-full max-w-md px-8">
                
                <div className="mb-4 text-center">
                    <p className="text-white text-lg font-semibold animate-pulse">
                        Analyzing your resume...
                    </p>
                </div>

                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden relative">
                    <div className="h-full bg-primary animate-[progressLoad_2s_linear_infinite]"></div>
                </div>

            </div>
        </div>
    )}
          
        </section>
    )
}

export default InputSection