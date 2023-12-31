'use client'
import { useEffect, useRef, useState} from "react"
import TechLogo from "./logo"
import { LegacyRef } from "react";

export default function LogosSection(){

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    let [react, setRaect] = useState(false)
    let [reactnative, setRaectnative] = useState(false)
    let [nextjs, setNextjs] = useState(false)
    let [tailwind, setTailwind] = useState(false)
    // let [redux, setRedux] = useState(false)

    let alreadyShown = useRef(false)

    let element = useRef<HTMLDivElement>(null)

    let appearChain = async()=>{
            setRaect(true)
        await sleep(500)
        setRaectnative(true)
        await sleep(500)
        setNextjs(true)
        await sleep(500)
        setTailwind(true)
        // await sleep(500)
        // setRedux(true)
    }

    useEffect(()=>{
        const cachedRef = element.current


        console.log(cachedRef)
        console.log(document.getElementById('logos'))

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
               console.log('VISIIIIBLE AHAHAAH')
               alreadyShown.current = true
               appearChain()
              }
            });
          });

          cachedRef? observer.observe(cachedRef) : null







    })

    return(
       
            <div ref ={element} className="absolute mt-[7vh] w-[100%] md:w-[80vw] h-[min] flex flex-row ml-[5vw]" id="logos" onLoad={()=>console.log('focused')}>
                {react?<TechLogo delay="2" title="React" logoPath="/logos/React-icon.svg"></TechLogo>:null}
                {reactnative?<TechLogo delay="2" title="React Native" logoPath="/logos/React-icon.svg"></TechLogo>:null}
                {nextjs?<TechLogo delay="2"  title="Next.js" logoPath="/logos/next.svg"></TechLogo>:null}
                {tailwind?<TechLogo  delay="2" title="Tailwind" logoPath="/logos/tailwind.svg"></TechLogo>:null}
                {/* {redux?<TechLogo  delay="0.5" title="Redux toolkit" logoPath="redux.svg"></TechLogo>:null} */}

            </div>
    )
}