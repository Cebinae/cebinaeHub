import ArrowDown from '@/components/buttonDown'
import Education from '@/components/eduSection'
import Greeting from '@/components/greeting'
import StarsBg from '@/components/staryBg'
import Image from 'next/image'
import React from 'react'


export default function Home() {


  return (
    <main className=" h-[100vh] w-full">
      <Greeting></Greeting>
      <StarsBg></StarsBg>
      <Education></Education>
      {/* <ArrowDown></ArrowDown> */}
    </main>
  )
}
