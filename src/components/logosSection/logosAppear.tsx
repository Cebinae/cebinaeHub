'use client'
import { useEffect, useRef, useState} from "react"
import TechLogo from "./logo"

export default function LogosSection(){

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    let [react, setRaect] = useState(false)
    let [reactnative, setRaectnative] = useState(false)
    let [nextjs, setNextjs] = useState(false)
    let [tailwind, setTailwind] = useState(false)
    // let [redux, setRedux] = useState(false)

    let alreadyShown = useRef(false)
    let element = useRef<Element | null>()
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

          observer.observe(cachedRef)







    })

    return(
       
            <div ref={element?element:<div></div>} className="absolute bg-transparent mt-[7vh] w-[62vw] h-[min] flex flex-row ml-[5vw]" id="logos" onLoad={()=>console.log('focused')}>
                {react?<TechLogo delay="1" title="React" logoPath="React-icon.svg"></TechLogo>:null}
                {reactnative?<TechLogo delay="0.5" title="React Native" logoPath="React-icon.svg"></TechLogo>:null}
                {nextjs?<TechLogo delay="0.5"  title="Next.js" logoPath="next.svg"></TechLogo>:null}
                {tailwind?<TechLogo  delay="0.5" title="Tailwind" logoPath="tailwind.svg"></TechLogo>:null}
                {/* {redux?<TechLogo  delay="0.5" title="Redux toolkit" logoPath="redux.svg"></TechLogo>:null} */}

            </div>
    )
}