import Image from "next/image"
import gsap from 'gsap'
import * as React from 'react'
import ArrowDown from "./buttonDown"



export default function Greeting(){


// React.useEffect(()=>{
//     gsap.fromTo('#leftGreeting', {
//         left:'-100%'
//     },{
//         left:0,
//         duration:1
//     })
// })



    return (
        <main className=" relative h-[100vh] w-full flex flex-row justify-between" id='leftGreeting'>

            <section className=" left-0 h-[100vh] w-[45vw] bg-bg700 will-change-transform">
                <Image className= 'h-full w-auto' priority={true}  src={'/morda.jpg'} alt='myPrettyFace' width={0} height={0} sizes="100vh"></Image>
            </section>




            <section className="  flex flex-col  h-[100vh] w-[55vw] bg-bg700 justify-center align-center will-change-transform overflow-shown">

                <div  id="rightGreeting" className=" animate-greetingRight absolute z-[555] flex flex-col justify-center items-start  h-[300px] w-[300px] bg-bg700 rounded-[50%] left-[-30%]">
                    <p className="text-[4rem] text-white ml-[40px]">Ilya</p>
                    <p className="text-[4rem] text-white ml-[40px]">Belobrov</p>
                </div>

                <article style={{willChange:'transform'}} className="animate-greetingArticle absolute z-[1] flex flex-col h-[25vh] w-[40vw] bg-bg700 top-[63vh] justify-evenly">
                    <h1 className="text-[1.4em] text-green">JavaScript developer</h1>
                    <p  style={{willChange:'transform'}} className="text-[1.1em] text-lightSecondary">
                    Probably the one you're looking for ;)

                    Since childhood i`m keen on computer science and had no doubts about my craft.
                    Being mostly interested in hight-quality web instactructure i found my passion in creating performant client-side applications.
                    My aim is to become a teammate that greatly contributes to a company's business value.
                    Creating something worthy is often a competition. And i'm ready to competee.
                    </p>

                </article>



            </section>
            <div className="fixed w-[350px] h-[350px] right-[1vw] top-[87vh]">
            </div>
        </main>
    )
}