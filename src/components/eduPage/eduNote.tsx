'use client'
import { gsap } from "gsap/gsap-core";
import { useEffect } from "react";

export default function EduNote (){

    useEffect(()=>{
        gsap.fromTo('#note',{
            x:'20%',
            rotate:"20%",
            y:'-30%'
        },{
            x:0,
            rotate:'-20%',
            duration:2,
            y:'0'
        })
    },[])
    return(
        <div id='note' style={{willChange:"transform"}} className="relative top-[10vh]  right-[-45vw] origin-bottom-left mt-[20vh] rotate-[-20deg] bg-bg1000 h-[80vh] w-[22vw]">
                        <div className="absolute z-[-2] w-[100%] h-[100%] left-[2vw] top-[-2vh] bg-darkOrange">
                        <h1 className="absolute text-[3vw] ml-[1vw]">Education</h1>
                        </div>
                    </div>
    )
}