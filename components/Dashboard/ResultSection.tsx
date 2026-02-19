import React from 'react'

const ResultSection = () => {
  return (
   <section>
        {/* Top */}
        <div className='bg-secondary flex gap-3 px-8 py-4 rounded-4xl border border-gray-800'>
            <div className='flex justify-center items-center text-4xl'>70%</div>
            <div>
                <div className='flex justify-between'>   
                    <h3 className='text-white font-semibold text-2xl'>AI Verdict</h3>
                    <h3 className=' bg-green-950 p-4'>Good Match</h3>
                </div>
               
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid blanditiis, reiciendis dignissimos hic unde suscipit voluptates magni soluta ullam fuga delectus inventore, assumenda eveniet consequuntur, officia nulla libero eaque nihil? Ad nam laudantium nobis sint, ab, animi necessitatibus est quaerat ipsum id porro hic.</p>
                
                <div className='flex gap-3'>
                    <div className='p-5 rounded-lg '><span>Keyword Match</span><span>80%</span></div>
                    <div><span>Formatings</span><span>80%</span></div>
                </div>
            </div>
        </div>
        
        {/* Bottom */}
        <div></div>
   </section>
  )
}

export default ResultSection
