'use client'
import React, { useEffect } from "react"


export default function ArrowDown() {

let scrollPosition = React.useRef(0)
let isFirstRender = React.useRef(true)

useEffect(()=>{
    window.addEventListener('scroll', (event=>{
        console.log(window.scrollY)}))
    document.getElementById('arrow')?.addEventListener('click', ()=>{window.scrollTo({top:2000, behavior:'smooth'}) })

    return window.removeEventListener('scroll', (event=>{
        console.log(window.scrollY)}))
      
})
    return (

        <div className="relative z-[9999] h-[30px] w-[100px] left-[100px] top-[-0.1vh]  opacity-[0.4]" id="arrow">
            <img src={'/arrowDown.svg'} alt="navigateArrow" width={300} height={300} color="white"></img>
        </div>
    )
}