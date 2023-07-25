// import Carousel from "./carousel";
import EduNote from "./eduPage/eduNote";
import Carousel from "./eduPage/gallery";

import { gsap } from "gsap/gsap-core"

export default function Education() {
    return(


        <main className="w-full h-full bg-bg700 overflow-hidden flex flex-row justify-between" id="eduSection">

            <section className="block w-[40vw] h-[100vh]  flex-1 flex flex-col justify-between">
                <div className="bg-transparent h-[35vh] w-[40vw]">
                    <p>Education</p>
                    <Carousel></Carousel>
                </div>
                <div>
                    
                </div>
            </section>

            <section className="relative w-[50vw] h-[100vh] flex flex-row justify-end">
                <div className="absolute w-[50vw] h-[min]">
                {/* rotate-[-20deg] */}
                    <EduNote></EduNote>
                </div>
            </section>

            
        </main>
    )
}