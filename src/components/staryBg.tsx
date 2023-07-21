// 'use client'

import Image from "next/image"
import Dot from "./starDot"
import LogosSection from "././logosSection/logosAppear"
import Saggitarius from "./starsSection/saggitarius"
import { useEffect } from "react"
import dynamic from "next/dynamic"

export default function StarsBg() {

    const LogosNoSsr = dynamic(
        () => import("././logosSection/logosAppear"),
        { ssr: false }
      )

    return(
        <section className="relative h-[100vh] w-[full] bg-bg700" id="technologies">

            {/* <div></div> */}
           <main className="absolute w-[60vw] h-full bg-transparent"> 
                <h1 className="relative z-[1] text-9xl text-lightPrimary  mt-[10vh] left-[3vw] ">Technologies</h1>
                <div className='relative'>
                    <p className="text-3xl text-lightSecondary ml-[5vw] mt-[5vh]">Key technologies</p>
                </div>

                <div className='relative h-[30vh] w-[40vw]'>
                    <LogosSection></LogosSection>
                </div>

                <article className="relative bg-transparent w-[40vw]  h-[min] rounded-xl">
                    <p> Here're some technologies i also had experience with: </p>
                </article>
                
            </main>

            <Saggitarius></Saggitarius>
        </section>
    )
}