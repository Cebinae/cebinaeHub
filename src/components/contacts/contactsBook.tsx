'use client'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Contacts from '../websiteCard';
import Contact from "./contact";
import Image from "next/image";


export default function ContactsBook() {

const orange = '#ffb661'
const darkOrange = '#f08441'



let isFirstRender = useRef(true)


    useEffect(()=>{

        let runAnimation = ()=>{
            isFirstRender.current=false
            gsap.to('#bookwrapper',{
                delay:0.3,
                repeat:0,
                duration:1,
                transformOrigin:'7% 0%',
                top:'2%',
                zIndex:1,
                // color: '#f08441',
                opacity:0.8,
                rotateZ:'6deg',
                // transformPerspective: 800,
                transform:'rotateY(-180deg)',
                onComplete:()=> console.log('animation ended')
            })

            gsap.to('#bookLabel',{
                delay:0.3,
                repeat:0,
                // color: '#f08441',
                opacity:0,
                duration:0.5,

                onComplete:()=> console.log('animation ended')
            })

            gsap.to('#page',{
                delay:0.3,
                repeat:0,
                opacity:1,
                duration:2,

                onComplete:()=> console.log('animation ended')
            })
        }

        isFirstRender.current? runAnimation():null
        
    },
    [])
//list of layers in public/book.psd

    return(
        <div style={{perspective:'130%'}} className="bg-bg700 top-[-10vh]  h-[100vh] w-[100vw] flex flex-col justify-center items-center">
            {/* <main className='mt-[30vh] relative h-[500px] bg-green w-[500px]'> */}
                <img className ='absolute z-[2] object-fill p-[0] h-[min] w-[30vw]' src="/book2.svg" ></img>

                <article id='page' className="absolute opacity-[0] flex flex-col content-start items-start  bg-transparent h-[30vw] z-[9998] w-[26vw]  
                skew-x-[-2deg] ">
                    {/* <h1 className= 'relative self-center text-[2vw] m-0 text-bg700 '>Contacts</h1> */}
                    <ul  className="pl-[3vmin]  text-lightSecondary font-semibold mb-[20vh] h-[100%] w-[100%]">


                        <h1 className= ' ml-[5vw]  mb-[2vw] text-[3vw] text-bg200 opacity-[0.7] '>Contacts</h1>

                        <Contact label="LinkedIn" linkText="linkedin.com/in/ilya-belobrov"></Contact>
                        <Contact label="Github" linkText="github.com/Cebinae"></Contact>
                        <Contact label="Email" linkText="ilyabelobrovhaha@gmail.com"></Contact>
                        <Contact label="Cell & Telegram" linkText="098 046 72 63"></Contact>
                        <Contact label="Telegram" linkText="t.me/cebinae"></Contact>
                    </ul>               
                </article>

                <div id='bookwrapper' className="relative z-[9999]">
                    <img  className ='relative z-[998] top-[-3%] object-cover w-[30vw] opacity-[1]' width={500} src="/bookwrapper2.svg" ></img>
                    <p id='bookLabel' className = 'absolute top-[10%] left-[0] right-[0] z-[999] text-center text-lightPrimary text-6xl'>Cebinae</p>
                    
                </div>

                <img className="fixed right-[-5vw] mt-[10vh] bottom-[5vh] z-[999] h-[90vh] w-[40vw]" src='/lamp.png' alt='lamp' width={400} height={700}></img>
                            
        </div>
    )
}



{/* <div id='layer_1' className="
               
                 border-b-[500px] 
                 border-b-darkOrange
                 border-l-[20px]
                 border-r-[30px]
                 border-x-bg400 
                 h-[0px] w-[430px]">     



                <div id='layer_3' className="
                        absolute
                        mb-[10%]
                        left-[0] bottom-[3%]
                        align-bottom
                        bottom-[0]
                        border-b-[60px] 
                        border-b-lightSecondary
                        border-l-[5px]
                        border-r-[3px]
                        border-x-[#11ffee00]
                        h-[0px] w-[420px]"
                        
                        >
                            <p>Huy</p>
                    </div>


                <div id='layer_2' className="
                        absolute
                        left-[0] bottom-[3%]
                        align-bottom
                        bottom-[0]
                        border-b-[60px] 
                        border-b-lightSecondary
                        border-l-[5px]
                        border-r-[3px]
                        border-x-[#11ffee00]
                        h-[0px] w-[420px]"
                        
                        >
                            <p>Huy</p>
                    </div>

                </div>

               
              
                
            </main> */}