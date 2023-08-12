'use client'

import ActionsBtn from "./portfolioPage/projectActionsBtn"
import { useRef, useEffect, useState } from "react"

export default function Trigger() {

    let isFirstRender = useRef(true)
    let [visible, setVisible] = useState(false)
    let triggerRef=useRef(null)

    useEffect(()=>{
        const cachedRef = triggerRef.current
        console.log('THIS BUTTON HAS LOADED')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              entry.isIntersecting? setVisible(true): setVisible(false)
                

              
            });
          });
          cachedRef? observer.observe(cachedRef) : null

          isFirstRender.current=false
    })

    
    return(
        <>
        <div ref={triggerRef} className="bg-red absolute bottom-[60vh] w-[1vw] h-[1vh]"/>
        <ActionsBtn isCebinaeHub={visible} isFirstRender={isFirstRender.current}/>
        </>
    )
}