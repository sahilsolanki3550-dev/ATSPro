import HeroSection from '@/components/Home/HeroSection'
import StepsSection from '@/components/Home/StepsSection'
import React from 'react'

const HomeContainer = () => {
  return (
    <div className='space-y-10 px-25 mx-auto'>
      <div className='mt-10'>
        <HeroSection />
      </div>
      <div><StepsSection /></div>
    </div>
  )
}

export default HomeContainer
