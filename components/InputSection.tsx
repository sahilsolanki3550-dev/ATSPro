'use client'
import { useState } from 'react'
import { optimize } from '../actions/actions'
// import {extractText} from '../utils/extractText'
import pdfToText from 'react-pdftotext';

// import {extractText} from '../actions/actions'

const InputSection = () => {

    const [result, setResult] = useState<string>("")
    const handlesubmit = async (formData: FormData) => {
        const job_description = formData.get("job_description") as string
        const file = formData.get("file") as File
         const resume_text = await pdfToText(file)
        // const 
        const response = await optimize(job_description, resume_text)
       
        console.log(response)
    }

    const extractText = async (formData:FormData) =>{
    
        const file = formData.get("file") as File

        const text = await pdfToText(file)
        console.log(text)
        setResult(text)
  };
    //    console.log(text)

       
   

    return (
        <section className='px-20 py-10 bg-green-100 grid grid-cols-2 gap-5'>
            <div className='p-5 bg-white rounded-lg space-y-5 w-150'>
                <p className='texr-green-500'>Paste job Description</p>
                <form action={handlesubmit}>
                    <textarea className='bg-gray-100 rounded-sm px-5 py-2 min-h-80 w-full border border-gray-200 shadow' name='job_description' placeholder='Paste the full job requirements, responsibilities and qualification here...' />
                    {/* <input type="file" className="text-sm text-stone-500 file:mr-5 file:py-2 file:px-4  file:rounded-full file:border-0 file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 " name='file'/> */}

                    <div className='w-ful flex justify-end'><button type='submit' className='px-5 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600'>Check</button></div>
                
                </form>
            </div>
            <div className='p-5 bg-white rounded-lg space-y-5 w-150'>
                <h3>Result</h3>
                {/* <div className='bg-gray-100 rounded-sm px-5 py-2 min-h-80 w-full border border-gray-200 shadow'>{skills} </div> */}
            </div>
            <div className='p-5 bg-white rounded-lg space-y-5 w-150'>
                <form action={extractText}>
                    <input type="file" className="text-sm text-stone-500 file:mr-5 file:py-2 file:px-4  file:rounded-full file:border-0 file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 " name='file'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className='p-5 bg-white rounded-lg space-y-5 w-150'>
                {result}
            </div>
        </section>
    )
}

export default InputSection
