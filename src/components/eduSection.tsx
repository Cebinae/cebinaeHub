// import Carousel from "./carousel";
import EduNote from "./eduPage/eduNote";
import Carousel from "./eduPage/gallery";
import { Suspense } from "react";
import { gsap } from "gsap/gsap-core"

export default function Education() {
    return(


        <main className="w-full h-full bg-bg700 overflow-shown flex flex-row justify-between" id="eduSection">

            <section className="block w-[40vw] h-[100vh] ml-[5vw]  flex-1 flex flex-col justify-around">
                <div className="bg-transparent h-[35vh] w-[40vw]">
                    <Suspense>
                        <Carousel></Carousel>
                    </Suspense>
                </div>

                <div>
                    <p className="text-lightSecondary text-lg">Just grauated from 
                    National Technical University «Kharkiv Polytechnic Institute»
                     as bachelor 
                        in automatisation, computer integrated technologies and robotics </p>
                    <p className="mt-[5vh] text-lightSecondary text-lg">
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