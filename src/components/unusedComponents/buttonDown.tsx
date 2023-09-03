'use client'
import React, { useEffect } from "react"
//! Not used, seems like i dnt need it here. Will not delete this component, may be useful later

export default function ArrowDown() {

let scrollPosition = React.useRef(0)
let isFirstRender = React.useRef(true)

useEffect(()=>{
    window.addEventListener('scroll', (event=>{
        event.preventDefault()
        console.log(window.scrollY)}))
    document.getElementById('arrow')?.addEventListener('click', ()=>{
        let height = document.body.offsetHeight
        let currScr = window.scrollY
        let pageBelow = ()=>{
           window.scrollTo({top:2000, behavior:'smooth'})
        }
        pageBelow()
    })

    return window.removeEventListener('scroll', (event=>{
        console.log(window.scrollY)}))
      
})
    return (

        <div className="fixed z-[9999] h-[30px] w-[100px] right-[3vw] bottom-[10vh]  opacity-[0.4]" id="arrow">
            <img src={'/arrowDown.svg'} alt="navigateArrow" width={300} height={300} color="white"></img>
        </div>
    )
}