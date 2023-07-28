import AndroidObj from "../androidObj/androidObj";

export default function SkinhunterFirst() {
    return(
        <div className="w-[100vw] absolute h-[100vh] mt-[10vh] left-[3vw] flex flex-col justify-start align-start ">

            <div>
                <h1 className="text-9xl text-lightPrimary">SkinHunter</h1>
            </div>

            <article>
                <p className="text-lg text-lightPrimary">is a pet-project with a real commercial use</p>
                <p className="text-lg text-lightSecondary w-[60vw]">
                    The main purpose of this application is to provide ecnanced tool for trading CS:GO skins on the most popular marketplace of csgo 
                    ecosystem - Dmarket.com. Depending on personal strategy, it will either save your time or increase incomes by giving a significant 
                    advantage in ability to rely on SkinHunter's background service instead of daily seeking of profitable offers.
                    It's light-weight, secure, well-optimised and offers adaptive UI, so feel free to try it out!
                </p>
            </article>

            <div className="relative">
                <AndroidObj></AndroidObj>
            </div>

        </div>
    )
}