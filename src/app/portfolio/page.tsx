// import SecondPhone from "@/components/portfolioPage/phoneObg/phoneObj"
// import AndroidObj from "@/components/portfolioPage/androidObj/androidObj"
// import PhoneScene from "@/components/portfolioPage/phoneScene"
import ActionsBtn from "@/components/portfolioPage/projectActionsBtn"
import SkinhunterSecond from "@/components/portfolioPage/screens/skinHunterSecond"
import SkinhunterFirst from "@/components/portfolioPage/screens/skinhunter"
import CloudsBg from "@/components/cloudsBg"

export default function PortfolioPage() {
    return (
        <div className="flex-1 bg-bg400 h-[300vh]">
            {/* <PhoneScene></PhoneScene> */}
            {/* <AndroidScene></AndroidScene> */}
            {/* <SecondPhone></SecondPhone> */}
            {/* <AndroidObj></AndroidObj> */}
            <SkinhunterFirst></SkinhunterFirst>
            <SkinhunterSecond></SkinhunterSecond>
            <CloudsBg></CloudsBg>
            <ActionsBtn></ActionsBtn>
        </div>
    )
}