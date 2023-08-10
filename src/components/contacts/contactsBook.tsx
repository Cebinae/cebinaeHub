'use client'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Contacts from '../websiteCard';
import Contact from "./contact";
import Image from "next/image";

export default function ContactsBook() {

const orange = '#ffb661'
const darkOrange = '#f08441'

let getRandomInt =(min:number, max:number)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min //Максимум не включается, минимум включается
}

let isFirstRender = useRef(true)

let runEmission = (delay:number)=>{
    gsap.to('#emission',{
        delay:0.1,
        opacity:0,
        duration:0.2,
        yoyo:true,
        repeat:0,
        repeatDelay:delay,
        onComplete:()=>{
            gsap.killTweensOf('#emission')
            runEmission(getRandomInt(1, 9))
        }
    })
}

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

            gsap.fromTo('#bookLabel',{
                repeat:0,
                opacity:1,
                duration:0.1,

                onComplete:()=> console.log('animation ended')
            },{
                delay:0.3,
                repeat:0,
                // color: '#f08441',
                opacity:0,
                duration:0.5,

                onComplete:()=> console.log('animation ended')
            })

            gsap.to('#page',{
                delay:0.35,
                repeat:0,
                opacity:1,
                duration:0.5,

                onComplete:()=> console.log('animation ended')
            })

            // runEmission(getRandomInt(1,9))

            gsap.fromTo('#emission',{
                opacity:0,
            },{
                delay:1.5,
                duration:0.4,
                opacity:0.3,
                repeat:0
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

                <div id='bookwrapper' className="relative z-[9999]">
                    <Image priority={true} alt="" height={500} width={500} className ='relative z-[998] top-[-3%] object-cover w-[30vw] opacity-[1]' src="/bookwrapper2.svg" ></Image>
                    <p id='bookLabel' className = 'absolute top-[10%] left-[0] right-[0] z-[999] text-center text-lightPrimary text-6xl'>Cebinae</p>
                    
                </div>

                <article id='page' className="absolute opacity-[0] flex flex-col content-start items-start  bg-transparent h-[30vw] z-[9998] w-[26vw]  
                skew-x-[-2deg] ">
                    {/* <h1 className= 'relative self-center text-[2vw] m-0 text-bg700 '>Contacts</h1> */}
                    <ul  className="pl-[3vmin]  text-lightSecondary font-semibold mb-[20vh] h-[100%] w-[100%]">


                        <h1 className= ' ml-[5vw]  mb-[2vw] text-[3vw] text-bg200 opacity-[0.7] '>Contacts</h1>

                        <Contact label="LinkedIn" linkText="linkedin.com/in/ilya-belobrov" link="http://linkedin.com/in/ilya-belobrov"></Contact>
                        <Contact label="Github" linkText="github.com/Cebinae" link="http://github.com/Cebinae" ></Contact>
                        <Contact label="Email" linkText="ilyabelobrovhaha@gmail.com" link="mailto:ilyabelobrovhaha@gmail.com"></Contact>
                        <Contact label="Cell & Telegram" linkText="098 046 72 63" link="tel:0980467263"></Contact>
                        <Contact label="Telegram" linkText="t.me/cebinae" link="http://t.me/Cebinae"></Contact>
                    </ul>               
                </article>

                



                <div className="fixed right-[-5vw] mt-[20vh]  z-[999] h-[80vh] w-[40vw]">

                    <div className=" bottom-[0] fixed h-[90%] w-[100%]">
                        <Image priority={true} className="relative right-[-5vw] mt-[10vh] bottom-[5vh] z-[99998] h-[90vh] w-[40vw]" src='/lamp/lamp3.png' alt='lamp' width={400} height={700}></Image>
                        <Image id='emission' className=" absolute opacity-[0] h-[80%] left-[-40%] top-[13%] w-[60%] z-[91] top-[0]" src='/lamp/emission.png' width={400} height={400} alt='light'></Image>  
                    </div>
                </div>
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