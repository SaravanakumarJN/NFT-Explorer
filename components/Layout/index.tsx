import React from 'react'
import LeftBar from '../LeftBar'
import RightBar from '../RightBar'

const Layout = ({children}) => {
  return (
    <div className="w-full divide-solid h-[100vh] flex">
    <LeftBar />
    <div className="flex-1">
    {children}
      </div>
    <RightBar />
  </div>
  )
}

export default Layout