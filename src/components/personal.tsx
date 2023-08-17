import CloudsBg from "./cloudsBg"
import WebsiteCard from "./websiteCard"
import PersonalArticle from "./personalArticle"

export default function PersonalFacts() {
    return(
        <div className="bg-400 relative h-[100vh] w-[100vw]">

        <h1 className="absolute z-[9999] left-[5vw]  mt-[10vh] items-center text-lightSecondary
            2xl:text-7xl 
            xl:text-7xl 
            lg:text-7xl 
            md:text-6xl 
        ">Some personal facts</h1>

            <CloudsBg></CloudsBg>
            <WebsiteCard bgColor="bg400" article={<PersonalArticle></PersonalArticle>}></WebsiteCard>

        </div>
    )
}