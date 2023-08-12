import CloudsBg from "./cloudsBg"
import WebsiteCard from "./websiteCard"
import PersonalArticle from "./personalArticle"

export default function PersonalFacts() {
    return(
        <div className="bg-400 relative h-[100vh] w-[100vw]">

        <h1 className="absolute z-[9999] left-[5vw]  text-7xl mt-[10vh] items-center text-lightSecondary">Some personal facts</h1>

            <CloudsBg></CloudsBg>
            <WebsiteCard bgColor="bg400" article={<PersonalArticle></PersonalArticle>}></WebsiteCard>

        </div>
    )
}