import InputSection from '@/components/Dashboard/InputSection'
import ResultSection from '@/components/Dashboard/ResultSection'
import React from 'react'

const DashboardContainer = () => {
  return (
    <div className='space-y-10'>
      <div>
        <InputSection />
      </div>
      <div>
        <ResultSection />
      </div>
    </div>
  )
}

export default DashboardContainer
