'use client'
import { useCallback, useState } from 'react'
import { optimize } from '../../actions/actions'
// import pdfToText from 'react-pdftotext';
import { AiResponse } from '@/types/type';
import { FileText, Sparkles } from 'lucide-react';
import { Upload } from 'lucide-react';
import ResultSection from './ResultSection';
// import {useDropzone} from 'react-dropzone'


const InputSection = () => {

    const [result, setResult] = useState<AiResponse>()
    
    const handlesubmit = async (formData: FormData) => {
        
        try{

            const job_description = formData.get("job_description") as string
            const file = formData.get("file") as File

            if(!job_description){
                alert("Enter job description ")
            }
            
            if(!file){
                alert("Plese Upload Resume ")
            }

            const pdfToText = (await import("react-pdftotext")).default
            const resume_text = await pdfToText(file)
            
            // const response = await optimize(job_description, resume_text) as AiResponse
            const response = await optimize(job_description, resume_text)
            if(!response){
                alert("Error")
                return
            }
            setResult(response)
            console.log(response)
        }       catch(error){
            console.log(error)
        }
        // console.log(response)
        // if(response)
    }

   
    return (
        <section className=''>
            <div className=''>

            

            <div className='space-y-8 '>
                <div className='space-y-2 px-2'>
                    <h1 className='text-white font-bold text-3xl'>Resume Analyzer</h1>
                    <p className='text-gray-500 text'>Upload your resume and target job description to get instat AI feedback.</p>
                </div>

                <div>
                        <form action={handlesubmit} className='space-y-8'>
                            <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='bg-secondary rounded-4xl py-5 px-5 md:py-6 md:px-7 space-y-5'>
                                
                                <div className='flex justify-between items-center'>    
                                    <h3 className='text-white font-semibold flex gap-2 text-lg items-center'><FileText size={23} color='blue'  /> Job Description</h3><span className='text-gray-600 uppercase font-semibold'>Required</span>
                                </div>
                                <textarea className='rounded-xl px-5 py-2 min-h-50 w-full border-[#FFFFFF0D] shadow placeholder:text-gray-500 placeholder:text-lg text-white bg-[#101022]' name='job_description' placeholder='Paste the full job requirements, responsibilities and qualification here...' />
                            </div>

                             <div className='bg-secondary rounded-4xl py-5 px-5 md:py-6 md:px-7  space-y-6'>
                                
                                <div className='flex justify-between items-center'>    
                                    <h3 className='text-white font-semibold flex gap-2 text-lg items-center'><Upload size={23} color='blue'/> Upload Resume</h3><span className='text-gray-600 uppercase font-semibold'>Pdf Only</span>
                                </div>                                
                                <div>
                                    <label htmlFor="file">
                                        <input type="file" className="hidden" name='file' id='file' />
                                        
                                        <div className='border-2 border-dashed border-[#FFFFFF1A] rounded-4xl py-10 text-center items-center flex flex-col justify-center space-y-5 cursor-pointer hover:bg-[#1c1c42] transition-all duration-300'>
                                            <div>
                                                <span className='h-15 w-15 bg-[#1c1c42] rounded-full flex items-center justify-center '><Upload size={23} color='blue' strokeWidth={3}/></span>
                                            </div>
                                            <div>
                                                <span className='text-white opacity-70 text-lg font-semibold '>Drag and drop your files hear <br/> </span>
                                                <div>
                                                    <span className='text-white opacity-50'>or</span> <span className='text-primary text-[16px] opacity-99'> browse yout computer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                    
                                </div>
                            </div>

                           
                            </div>
                            <div className='flex justify-center px-2'>
                                <button type='submit' className='px-10 py-4 w-full md:max-w-150 bg-primary flex gap-2 text-white rounded-full items-center justify-center cursor-pointer hover:bg-[#1f1fd2] transition-all duration-200 font-semibold text-[20px]'> <Sparkles fill='white' strokeWidth={1}/> Analyze Now</button>
                            </div>    
                        </form>
                    
                </div>

            </div>
        </div>

        {result &&  
            <div className='animate-fadeIn'>

                <ResultSection result={result}/>
            </div>
            
        }
          
        </section>
    )
}

export default InputSection
