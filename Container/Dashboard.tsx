import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Home from '../components/Home'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import Posts from './Posts'


const Dashboard = () => {
    const router = useRouter()
  return (
    <div className="w-full divide-solid h-[100vh] flex">
    <LeftBar />
    <div className="flex-1">
        <Link href="/">
        <Home />
        </Link>
        <Link href="/post">
        <Posts/>
        </Link>
      </div>
    <RightBar />
  </div>
  )
}

export default Dashboard