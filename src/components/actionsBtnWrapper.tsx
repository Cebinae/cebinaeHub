'use client'
import ActionsBtn from "./portfolioPage/projectActionsBtn"
import { useRef, useEffect } from "react"


export default function ActionsBtnWrapper() {
    let isFirstRender = useRef(true)
    let isCebinaeVisible = useRef(false)
    let triggerRef=useRef(null)

    useEffect(()=>{
        const cachedRef = triggerRef.current
        console.log('THIS BUTTON HAS LOADED')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              entry.isIntersecting? isCebinaeVisible.current = true : isCebinaeVisible.current=false
            });
          });
          cachedRef? observer.observe(cachedRef) : null
    })

   return(
          <>
            <div 
            ref={triggerRef}
             id='btnTriggerrr' className="fixed w-[40vw] z-[99999] h-[50vh] bg-green bottom-[0] left-[0]">
                <p>HUYYY</p>
            </div>
            <ActionsBtn></ActionsBtn>
        </>
            
    )
}