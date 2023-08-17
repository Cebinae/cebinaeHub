// import Carousel from "./carousel";
import EduNote from "./eduPage/eduNote";
import Carousel from "./eduPage/gallery";
import { Suspense } from "react";

export default function Education() {
    return(


        <main className="w-full h-full bg-bg700 overflow-shown flex flex-row justify-between" id="eduSection">

            <section className="block w-[40vw] h-[100vh] ml-[5vw]  flex-1 flex flex-col justify-start">
                <div className="bg-transparent h-[35vh] max-h-[60vh]
                2xl:w-[40vw] 2xl:max-h-[40vh] 2xl:mt-[10vh] 2xl:mr-[0]
                xl:w-[45vw] xl:max-h-[45vh] xl:mt-[10vh] xl:mr-[0]
                lg:w-[55vw]  lg:mt-[10vh] lg:mr-[0]
                md:w-[60vw]  md:max-h-[60vh]  md:mt-[10vh]
                ">
                    <Suspense>
                        <Carousel></Carousel>
                    </Suspense>
                </div>

                <div className="
                    2xl:mt-[22vh] 2xl:w-[auto]
                    xl:mt-[15vh] xl:w-[40vw]
                    lg:mt-[15vh] lg:w-[55vw]
                    md:mt-[15vh] md:w-[60vw]
                ">
                    <p className="text-lightSecondary text-lg mt-[3vh] w-[100%]">Just grauated from 
                    National Technical University «Kharkiv Polytechnic Institute»
                     as bachelor 
                        in automatisation, computer integrated technologies and robotics </p>
                    <p className="mt-[5vh] text-lightSecondary text-lg w-[100%]">
                        Also, i've just passed exams in order to get applied for the 
                        fifth year of study and look forward to be graduated as master
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