// 'use client'


import LogosSection from "./logosSection/logosAppear"
import Saggitarius from "./starsSection/saggitarius"

import { Suspense } from "react"


export default function StarsBg() {

    

    return(
        <section className="relative h-[100vh] w-[full] bg-bg700" id="technologies">

            {/* <div></div> */}
           <main className="absolute w-[60vw] h-full bg-transparent"> 
                <h1 className="relative z-[1] 2xl:text-[14.2vh] xl:text-[14.2vh] lg:text-[14.2vh] md:text-8xl text-lightPrimary  mt-[10vh] left-[3vw] ">Technologies</h1>
                <div className='relative'>
                    <p className="text-3xl text-lightSecondary ml-[5vw] mt-[5vh]">Key technologies</p>
                </div>

                <div className='relative h-[30vh] w-[40vw] md:w-[80vw]'>
                    <LogosSection></LogosSection>
                </div>

                <article className="relative bg-transparent 2xl:w-[40vw] xl:w-[40vw] lg:w-[40vw] md:w-[80vw] ml-[5vw] mt-[3vh] h-[min] rounded-xl">
                    <p className="text-green 2xl:text-lg xl:text-lg lg:text-lg md:text-xl"> <span className="text-lightSecondary">Here're some technologies I'm also experienced with: </span> 
                    TypeScript, reduxtoolkit, redux-persist, REST-api, postman, gradle, nativeCLI, expoCLI, native modules, GSAP, three.js(react-three-fiber), background-actions, notifee, push-notifications, rn-keychain, async-storage, axios
                    <span className="text-lightSecondary">  and other minor technologies</span>
                    </p>
                </article>
                {/* <article className="2xl:w-[40vw] xl:w-[40vw] lg:w-[40vw] md:w-[80vw] ml-[5vw] mt-[3vh] h-[min]">
                    <p className="text-lightSecondary 2xl:text-lg xl:text-lg lg:text-lg md:text-xl">There're some other technologies I'm interested in and would be especially glad to deal with: Java(andorid), Flutter, and node.js based back-end (express/nest)</p>
                </article> */}
                <article className="2xl:w-[40vw] xl:w-[40vw] lg:w-[40vw] md:w-[80vw] ml-[5vw] mt-[3vh] h-[min]">
                    <p className="text-lightSecondary 2xl:text-lg xl:text-lg lg:text-lg md:text-xl">Encountering new challenges I'm always glad to enlarge my stack and there're some technologies I would be especially fancy to deal with: Java(andorid), Flutter, and node.js based back-end (express/nest)</p>
                </article>
                
            </main>
            <Suspense>
                <Saggitarius></Saggitarius>
            </Suspense>
        </section>
    )
}