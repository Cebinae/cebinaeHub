// import SecondPhone from "@/components/portfolioPage/phoneObg/phoneObj"
// import AndroidObj from "@/components/portfolioPage/androidObj/androidObj"
// import PhoneScene from "@/components/por tfolioPage/phoneScene"
import ActionsBtn from "@/components/portfolioPage/projectActionsBtn"
import SkinhunterSecond from "@/components/portfolioPage/screens/skinHunterSecond"
import SkinhunterFirst from "@/components/portfolioPage/screens/skinhunter"
import CloudsBg from "@/components/cloudsBg"
import StarsBg from "@/components/technologies"
import Greeting from "@/components/greeting"

export default function PortfolioPage() {
    return (
        <div className=" bg-bg400 w-full h-[300vh]">
            {/* <PhoneScene></PhoneScene> */}
            {/* <AndroidScene></AndroidScene> */}
            {/* <SecondPhone></SecondPhone> */}
            {/* <AndroidObj></AndroidObj> */}
            <SkinhunterFirst></SkinhunterFirst> 
            <SkinhunterSecond></SkinhunterSecond>
            {/* <Greeting></Greeting>
            <StarsBg></StarsBg> */}
            <CloudsBg></CloudsBg>
            {/* <ActionsBtn></ActionsBtn> */}
        </div>
    )
}