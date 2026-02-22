import UserNavbar from '@/components/CommonUI/UserNavbar'
import DashboardContainer from '@/containers/DashboardContainer'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='sticky z-50 top-0 '>
        <UserNavbar />
      </div>
      <div className='pt-8 '>
        <DashboardContainer />
      </div>
    </>
  )
}

export default page
