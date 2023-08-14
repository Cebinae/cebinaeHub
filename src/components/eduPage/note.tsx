'use client'
import { useEffect } from "react"
import { gsap } from "gsap";

export default function Note() {

    useEffect(()=>{
        gsap.fromTo('#note',{
            x:'20%',
            rotate:"20%",
            y:'-60%'
        },{
            x:0,
            rotate:'-20%',
            duration:2,
            y:'0',
            ease:'power4.out'
        })
    },[])

    return(


        <div id='note' style={{willChange:"transform"}} className="relative top-[10vh] z-[99999]  right-[-45vw] origin-bottom-left mt-[20vh] rotate-[-20deg] bg-bg1000 h-[80vh] w-[22vw]">
                        <div className="absolute z-[-2] w-[100%] h-[100%] left-[2vw] top-[-2vh] bg-darkOrange">
                        <h1 className="absolute text-[3vw] text-lightPrimary ml-[1vw]">Education</h1>
                        </div>
        </div>
    )
}