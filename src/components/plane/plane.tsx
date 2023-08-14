'use client'
import {gsap} from 'gsap'
import { useEffect, useRef } from 'react';
import Link from 'next/link';
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
        <Link href='/contacts' style={{willChange:'transform'}} className='relative z-[1] h-min w-[min] bg-transparent top-[100px]' id='plane'>
            <img src="/plane/plane4.png" style={{willChange:'transform'}} height={300} width={props.width}></img>
            <img src='/plane/rotor2.svg' style={{willChange:'transform'}} className="absolute z-[999] transform-gpu animate-rotorSpin  top-[33%] right-[1px]"  height={300} width={props.width/6}></img>
        </Link>
    )
}