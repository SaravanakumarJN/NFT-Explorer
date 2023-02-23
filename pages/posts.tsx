import React from 'react'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import Posts from '../Container/Posts'

const page = () => {
  return (
    <div className="w-full divide-solid h-[100vh] flex">
    <LeftBar />
    <div className="flex-1">

        <Posts />
      </div>
    <RightBar />
  </div>
  )
}

export default page