import Image from "next/image"
import * as React from 'react'


export default function Greeting(){

    return (
        <main className=" relative h-[100vh] w-full flex bg-bg700 flex-row justify-between" style={{willChange:"transform"}}>

            <section className=" left-0 h-[100vh] w-[max] bg-bg700 will-change-transform
                2xl:opacity-[1]
                xl:opacity-[1]
                lg:opacity-[1]
                md:opacity-[0.7]

            ">
                <Image className= 'h-[100vh] w-auto' priority={true}
               
                src={require('../../public/morda.jpg')} alt='myPrettyFace' ></Image>
            </section>

            <section className="  flex flex-col  h-[100vh] flex-1 bg-bg700 justify-center align-center will-change-transform overflow-shown">

                <div  style={{willChange:"transform"}} className=" animate-greetingRight aspect-square absolute top-[30vmin] flex flex-col justify-center items-start  
                    xl:h-[34vh] xl:w-[34vh] xl:left-[-17vh] 
                    lg:h-[34vmin] lg:w-[34vmin] lg:left-[-17vmin] 
                    md:mb-[80vh] md:mr-[5vh] md:w-[32vh] md:h-[32vh] md:ratio-[1/1] md:left-[-16vh] 
                    bg-bg700 rounded-[50%]">
                    <p className="
                        2xl:text-[4rem] xl:text-[3.5rem] lg:text-[4rem] md:text-[3.5rem] 
                        relative z-[999] text-lightPrimary ml-[40px] ">Ilya</p>
                    <p className="
                        2xl:text-[4rem] xl:text-[3.5rem] lg:text-[4rem] md:text-[3.5rem] 
                        relative z-[999] text-lightPrimary ml-[40px] md:text-[3.5rem]">Belobrov</p>
                    <p className="2xl:hidden xl:hidden lg:hidden md:block md:text-green md:text-xl md:ml-[5vh] md:mb-[8%] self-start">JavaScript developer</p>
                </div>

                <article style={{willChange:'transform'}} className="animate-greetingArticle 
                    bottom-[3vh] pl-[5vw] mb-[1vh]
                    2xl:bottom-[5vh] 2xl:w-max-[30vw] 
                    xl:left-[-0] xl:ml-0 xl:w-min-[25vw] xl:w-max-[30vw] xl:bottom-[5vh] xl:bg-transparent
                    lg:left-[-0] lg:ml-0 lg:w-min-[300px] lg:h-[auto] lg:bottom-[10vh] lg:pr-[1vh]
                    md:ml-[5vh] md:mb-[4vh] md:left-[-65vh] md:py-[0vh] md:z-[9999] md:rounded-2xl md:bg-bg700 md:min-w-[500px]  md:bg-bg700
                    absolute z-[999] flex flex-col w-[40vw] bg-bg700 justify-end overflow-shown">
                    <h1 className="text-[1.4em] 
                        2xl:inline-block 2xl:mb-[1vh]
                        xl:mb-[0] xl:inline-block
                        lg:mb-[1vh] lg:px-[0] lg:inline-block
                        md:mb-[1vh] md:bg-bg700  md:rounded-xl md:mt-[1vh] md:hidden
                        x text-green relative z-[999]">JavaScript developer</h1>
                    <p  style={{willChange:'transform'}} className="
                    2xl:text-[2vh] xl:text-[2.4vh] lg:text-[2vh] md:text-[2vh] sm:text-[5vh]  text-lightSecondary relative z-[4]
                    2xl:max-w-[30.4vw]
                    xl:w-[60vh] xl:max-w-[100vw] 
                    lg:max-w-[80%] lg:h-[auto] lg:max-h-[20vh] lg:mb-[3.5vh] 
                    md:mb-[1vh] 
                    md:w-[auto]  md:h-[auto]  
                    
                    sm:w-[60vw]
                    ">
                    Probably the one you're looking for ;)
                    {/* //  md:h-[min] md:max-h-[34vh]  md:w-min-[60vh] md:py-[1vh] md:px-[1vh] */}
                    {' '}Since childhood I`m keen on computer science and had no doubts about my craft.
                    Being mostly interested in hight-quality web instactructure I found my passion creating performant client-side applications.
                    My aim is to be a teammate who greatly contributes to a company's business value.
                    Creating something worthy is often a competition. And I'm ready to compete.
                    </p>

                </article>

            </section>
        
        </main>
    )
}