import FeaturesSection from '@/components/Home/FeaturesSection'
import HeroSection from '@/components/Home/HeroSection'
import PricingSection from '@/components/Home/PricingSection'
import StepsSection from '@/components/Home/StepsSection'
import React from 'react'

const HomeContainer = () => {
  return (
    
    <div className='space-y-10 px-25 mx-auto text-white'>
      <div className='mt-10'>
        <HeroSection />
      </div>
      <div><StepsSection /></div>
      <div><FeaturesSection /></div>
      <div><PricingSection /></div>
    </div>
  )
}

export default HomeContainer
