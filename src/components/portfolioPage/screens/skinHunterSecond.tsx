import FeatureCard from "@/components/featureCard"
import Carousel from "@/components/carousel"
import ActionsBtnWrapper from "@/components/actionsBtnWrapper"


export default function SkinhunterSecond (){
    return(
        <div className="relative w-[100vw] h-[100vh] bg-bg400">
            {/* <div className="absolute"> */}
            <h1 className="relative top-[0] text-9xl z-[998] mt-[3vh] text-green ml-[3vw]">Main features</h1>






            <main className="absolute flex flex-row justify-around ml-[auto] mr-[auto] mt-[5vh] h-[60vh] w-[100vw]">


                <FeatureCard imgPrimary="/logged.png" imgSecondary="/notRunning.png"
                    textPrimary="Log in with API keys or continue unlogged
                    with most of the functionality still availabe!"
                    textSecondary="At fisrt you draft of found offers will be empty and contain 
                    a short walktrough to get started"
                />
                <FeatureCard imgPrimary="/configure.png" imgSecondary="/itemCard.png"
                    textPrimary="Create requirements for offers to be marked as
                    potetially profitable with a bunch of handy settings"
                    textSecondary="Each found offer will contain necessary data to consider a deal
                    and a quick link to this item"
                />
                <FeatureCard imgPrimary="/settings.png" imgSecondary="/notifee.png"
                     textPrimary="Adjust SkunHunter's setting accroding to your needs
                     and see how your balance changes"
                     textSecondary="Notifications will be grouped by title and display
                     key statements about these offers "
                />
              



            </main>



            {/* </div> */}
        </div>
    )
}