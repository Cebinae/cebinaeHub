import React from "react";
import { Suspense } from "react";
import Carousel from "./gallery";
import EduNote from "./eduNote";

// const Carousel = React.lazy(() => import("./eduPage/gallery"));
// const EduNote = React.lazy(() => import("./eduPage/eduNote"));


export default function Education() {
    return(

        <main className="w-full h-full bg-bg700 overflow-shown flex flex-row justify-between" id="eduSection">

            <section className="block w-[40vw] h-[100vh] ml-[5vw]  flex-1 flex flex-col justify-start">
                <div className="bg-transparent h-[35vh] max-h-[60vh]
                2xl:w-[40vw] 2xl:max-h-[40vh] 2xl:mt-[10vh] 2xl:mr-[0]
                xl:w-[43vw] xl:mt-[15vh] xl:max-h-[43vh] xl:mt-[10vh] xl:mr-[0]
                lg:w-[55vw]  lg:mt-[10vh] lg:mr-[0]
                md:w-[60vw]  md:max-h-[60vh]  md:mt-[10vh]
                ">
                    <Suspense>
                        <Carousel></Carousel>
                    </Suspense>
                </div>

                <div className="
                    2xl:mt-[22vh] 2xl:w-[auto]
                    xl:mt-[25vh] xl:w-[45vw]
                    lg:mt-[25vh] lg:w-[55vw]
                    md:mt-[25vh] md:w-[60vw]
                ">
                    <p className="text-lightSecondary text-lg mt-[3vh] w-[100%]">Just grauated from 
                    National Technical University «Kharkiv Polytechnic Institute»
                     as bachelor  in computer integrated technologies and robotics 
                    </p>
                    <p className="text-lightSecondary text-lg w-[100%]
                    2xl:mt-[5vh]  xl:mt-[2vh]  lg:mt-[2vh] 
                    ">
                        Also, I've just applied for the 
                        fifth year of study and look forward to be graduated as master in 2025
                    </p>
                </div>
            </section>

            <section className="relative w-[50vw] h-[100vh] flex flex-row justify-end">
                <div className="absolute w-[50vw] h-[100vh]">
                {/* rotate-[-20deg] */}
                <Suspense>
                    <EduNote></EduNote>
                </Suspense>
                </div>
            </section>

            
        </main>
    )
}