import WebsiteCard from "@/components/websiteCard"
import Trigger from "@/components/btnTrigger"
import CebinaeArticle from "@/components/cebinaeActicle"

export default function CebinaeHub(){
    return(
        <>
        <section className="absolute w-[100vw] flex flex-row justify-center h-[100vh] bg-bg400">
        <h1 className="absolute left-[3vw]  text-[14.2vh] leading-1 mt-[6vh] items-center text-lightPrimary">CebinaeHub</h1>

            <WebsiteCard article={<CebinaeArticle></CebinaeArticle>}/> 
            <Trigger/>

        </section>
                    </>
    )
}