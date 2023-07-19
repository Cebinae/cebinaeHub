'use client'
import {gsap} from 'gsap'
import { useEffect, useRef } from 'react';

export default function Plane(props:{
    width:number
}) {

let isFirstRender = useRef(true)
useEffect(()=>{
    // isFirstRender.current?()=>{
        isFirstRender.current = false
        gsap.to("#plane", {
            x: `random(-${window.innerWidth/4}, ${window.innerWidth/4})`,
            y: `random(-${window.innerHeight/8}, ${window.innerHeight/8})`,
            ease: "power1.out",
            duration: 15, 
            repeat: -1,
            repeatRefresh: true
          });
    // }:null
})

    


    return(
        <div className='relative z-[1] h-min w-[min] bg-transparent top-[100px]' id='plane'>
            <img src="/plane/plane3.png"  height={300} width={props.width}></img>
            <img src='/plane/rotor2.svg' className="absolute z-[999]  animate-spin  top-[33%] right-[1px]"  height={300} width={props.width/6}></img>
        </div>
    )
}