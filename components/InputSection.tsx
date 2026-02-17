'use client'

import React from 'react'
// import {geminiApi}  from "../api/geminiApi";
import {getSkills} from "../app/actions/actions"

    const InputSection =  () => {

    
    return (
    <section className='px-20 py-10 bg-green-100'>
            <div className='p-5 bg-white rounded-lg space-y-5 w-150'>
                <p className='texr-green-500'>Paste job Description</p>
                <form action={getSkills}>
                    <textarea className='bg-gray-100 rounded-sm px-5 py-2 min-h-80 w-full border border-gray-200 shadow' placeholder='Paste the full job requirements, responsibilities and qualification here...'/>
                    <div className='w-ful flex justify-end'><button type='submit' className='px-5 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600'>Check</button></div>
                </form>
            </div>
            {/* <div>Result</div> */}
    </section>
    )
    }

    export default InputSection
