import React from 'react'

const MainSection = () => {
  return (
    <div className='mx-auto flex flex-col justify-center items-center px-30 space-y-10'>
        <div className='text-center'>
            {/* <h1 className='text-5xl font-semibold py-10'>Extract Relevent Skills From Job Description</h1> */}
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque tenetur odit atque voluptatem. Tempore earum totam ab maxime iusto ut rerum cumque quas, esse consectetur, aliquam minus optio blanditiis eaque!</p>
        </div>
        <div>
            <form action="" className='space-x-10'>
                <input type="text" placeholder='Enter Job Description' className='border w-100 p-2 shadow-lg bg-white rounded-sm'/>
                <button className='border shadow-lg px-4 py-2 bg-white rounded-sm'>Check</button>
            </form>
        </div>
    </div>
  )
}

export default MainSection
