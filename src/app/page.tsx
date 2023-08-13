import ArrowDown from '@/components/buttonDown'
// import Education from '@/components/eduSection'
import Greeting from '@/components/greeting'
// import StarsBg from '@/components/technologies'
import Image from 'next/image'
import React from 'react'
import CloudsBg from '@/components/cloudsBg'
import { Suspense } from 'react'
// import PersonalFacts from '@/components/personal'
// import StarsBg from './../components/technologies';

const StarsBg = React.lazy(() => import('@/components/technologies'));
const Education = React.lazy(() => import('@/components/eduSection'));
const PersonalFacts = React.lazy(() => import('@/components/personal'));


export default function Home() {


  return (
    <main className=" h-[100vh] w-full">
      <Greeting></Greeting>
      <Suspense>
        <StarsBg/>
      </Suspense>

      <Suspense>
        <Education/>
      </Suspense>
      {/* <ArrowDown></ArrowDown> */}
      
      <Suspense>
        <PersonalFacts></PersonalFacts>
      </Suspense>    
      </main>
  )
}
