import AndroidScene from "@/components/portfolioPage/android/androidScene"
import SecondPhone from "@/components/portfolioPage/phoneObg/phoneObj"
import PhoneScene from "@/components/portfolioPage/phoneScene"


export default function PortfolioPage() {
    return (
        <div className="flex-1 bg-bg400 flex flex-row justify-center align-center  items-center mt-[30vh]">
            {/* <PhoneScene></PhoneScene> */}
            {/* <AndroidScene></AndroidScene> */}
            <SecondPhone></SecondPhone>
        </div>
    )
}