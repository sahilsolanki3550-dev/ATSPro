import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface TestimonialProp {
  image?: StaticImageData
  name: string
  designation: string
  desc: string
}
const TestimonialsSection = () => {

  const TestimonialList: TestimonialProp[] = [
    {
      name: "Sarah Jenkins",
      designation: "Product Designer @ Stripe",
      desc: "I applied to 40 jobs with no response. After using ATSPro, I got 5 callbacks in the first week. The keyword optimization is a game-changer.",
    },
    {
      name: "David Chen",
      designation: "Software Engineer @ Airbnb",
      desc: "The AI suggestions were incredibly specific. It didn't just tell me what was wrong; it showed me exactly how to fix it. Worth every penny.",

    },
    {
      name: "Jessica Miller",
      designation: "Marketing Manager @ HubSpot",
      desc: "Finally a tool that understands modern recruitment technology. I felt like I had a secret weaponduring my last job search.",
    }
  ]

  return (
    <section className='space-y-15'>
      <div className='space-y-20'>
        <h1 className='text-3xl font-black text-center '>Trusted by Job Seekers at</h1>
        <div className='flex gap-15 justify-center'>
          <div className='h-10 w-10 bg-gray-500  opacity-50 '></div>
          <div className='h-10 w-10 bg-gray-500  opacity-50 '></div>
          <div className='h-10 w-10 bg-gray-500  opacity-50 '></div>
          <div className='h-10 w-10 bg-gray-500  opacity-50 '></div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-8'>
        {TestimonialList.map((t, index) => (

          <div key={index} className='p-10 bg-background boreder rounded-4xl border-border space-y-6'>
            <p className='text-slate-300 text-xl'>"{t.desc}"</p>
            <div className='flex gap-5 items-center'>
              <div className='h-12 w-12 bg-white rounded-full'>
              </div>
              <div>
                <h2 className='font-bold
                 text-white text-2xl'>{t.name}</h2>
                <p className=' text-slate-500'>{t.designation}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default TestimonialsSection
