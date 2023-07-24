import Carousel from "./carousel";

export default function Education() {
    return(


        <main className="w-full h-full bg-bg700 overflow-hidden flex flex-row justify-between" id="eduSection">

            <section className="block w-[40vw] h-[100vh] bg-bg400 flex-1 flex flex-col justify-between">
                <div className="bg-blue h-[35vh] w-[40vw]">
                    <p>Education</p>
                    <Carousel></Carousel>
                </div>
                <div>
                    
                </div>
            </section>

            <section className="relative w-[50vw] h-[100vh] flex flex-row justify-end">
                <div className="absolute w-[50vw] h-[min]">
                {/* rotate-[-20deg] */}
                    <div style={{willChange:"transform"}} className="relative top-[10vh]  right-[-30vw] origin-bottom-left mt-[20vh] rotate-[-20deg] animate-eduNote bg-bg1000 h-[80vh] w-[22vw]">
                        <div className="absolute z-[-2] w-[100%] h-[100%] left-[2vw] top-[-2vh] bg-darkOrange">
                        <h1 className="absolute text-[3vw] ml-[1vw]">Education</h1>
                        </div>
                    </div>
                </div>
            </section>

            
        </main>
    )
}