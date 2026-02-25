'use client'
import { useState } from 'react'
import { optimize } from '../../actions/actions'
// import pdfToText from 'react-pdftotext';
import pdf from '@/public/icons/pdf.png'
import { AiResponse } from '@/types/type';
import { FileText, Sparkles, X } from 'lucide-react';
import { Upload } from 'lucide-react';
import ResultSection from './ResultSection';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';

const InputSection = () => {

    const [result, setResult] = useState<AiResponse>()
    const [loading, setLoading] = useState(false)
    const [dragActive, setDragActive] = useState(false)
    const [file, setFile] = useState<File | null>()

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragActive(true)
    }

    const hadleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragActive(false)
    }

     const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragActive(false)

        const FileList = e.dataTransfer.files

        if (!FileList || FileList.length === 0) return

        const dropped_file = FileList[0] as File
        if(dropped_file.type !== "application/pdf"){
            toast.error("Uplod only pdf")
            return
        }
        setFile(dropped_file)
        toast.success("File Uploded")
        

        // const input = document.getElementById("file") as HTMLInputElement
        // if (!input) return

        // const dt = new DataTransfer()
        // dt.items.add(dropped_file)
        // input.files = dt.files  
    }

    const handleFile = (selected_file:File) => {
        toast.success("File Uploded")
        setFile(selected_file)
    }

     const removeFile = () => {
        setFile(null)
        toast.success("File Removed")
        const input = document.getElementById("file") as HTMLInputElement
        input.value = ""
    }
    
   const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setLoading(true)

            const formData = new FormData(e.currentTarget)

            const job_description = formData.get("job_description") as string
            
            if (!job_description) {
                toast.info("Enter job description")
                return
            }

            if (!file || file.size === 0) {
                toast.info("Plese Upload Resume")
                return
            }

            const pdfToText = (await import("react-pdftotext")).default
            const resume_text = await pdfToText(file)

            const response = await optimize(job_description, resume_text)

            if (!response) {
                toast.error("Error, Please retry")
                return
            }

            toast.success("Analysis Done")
            setResult(response)

        } catch (error) {
            console.log(error)
            toast.info("You excced daily quota")
        } finally {
            setLoading(false)
           
        }
    }

    return (
        <>
        
        <ToastContainer position='top-right' hideProgressBar={true} autoClose={2000} />

      
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
                                        <input type="file" className="hidden" name='file' id='file' accept="application/pdf" onChange={(e) => {
                                                        if (!e.target.files?.length) return;
                                                        handleFile(e.target.files[0]);
                                                    }}/>
                                        
                                        <div    onDragOver={handleDragOver}
                                                onDragLeave={hadleDragLeave}
                                                onDrop={handleDrop}
                                               className={`border-2 border-dashed rounded-4xl py-10 text-center items-center flex flex-col justify-center space-y-5 cursor-pointer transition-all duration-300 ${dragActive
                                                        ? "border-primary bg-[#1c1c42] scale-[1.02]"
                                                        : "border-[#FFFFFF1A] hover:bg-[#1c1c42] hover:border-primary hover:scale-[1.02]"
                                                        }`}>
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
                                    {file && (
                                                <div className=' bg-gray-800 my-5 p-2 flex gap-2 transition-all duration-300'>
                                                    <Image alt='pdf' src={pdf} width={20} />
                                                    <div className='flex justify-between w-full'>
                                                        <div> {file?.name} </div>
                                                        <div className='flex gap-2'>
                                                            {(file.size / 1024).toFixed(2)} KB

                                                            <div onClick={removeFile}><X color='red' /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
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
          </>
    )
}

export default InputSection