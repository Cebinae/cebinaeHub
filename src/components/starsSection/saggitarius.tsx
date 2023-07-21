import Image from "next/image"
import Dot from "../starDot"

export default function Saggitarius() {
    return(
        <div className="absolute right-[10px] h-[400px] w-[400px] bottom-[10vh]  right-[10vw]">
        <Image src={'/sagg5.png'} alt="saggitarius" width={400} height={400} className="opacity-[0.3] absolute"></Image>
        <Dot id="1" small={true} top={'4.8%'} left={'56.5%'}></Dot>
        <Dot id="2" small={true} top={'24%'} left={'57.5%'}></Dot>
        <Dot id="3" small={true} top={'23%'} left={'84.5%'}></Dot>
        <Dot id="4" small={true} top={'27%'} left={'73.5%'}></Dot>
        <Dot id="5" small={true} top={'22.3%'} left={'27.5%'}></Dot>
        <Dot id="6" small={true} top={'26.3%'} left={'25.5%'}></Dot>
        <Dot id="7" small={true} top={'24.3%'} left={'3.5%'}></Dot>
        <Dot id="8" small={true} top={'22.3%'} left={'50.5%'}></Dot>
        <Dot id="9" small={true} top={'22.8%'} left={'43.5%'}></Dot>
        <Dot id="10" small={true} top={'31.3%'} left={'40.5%'}></Dot>
        <Dot id="11" small={true} top={'31.3%'} left={'48.5%'}></Dot>
        <Dot id="12" small={true} top={'19.8%'} left={'82.5%'}></Dot>
        <Dot id="13" small={true} top={'20.5%'} left={'92.4%'}></Dot>
        <Dot id="14" small={true} top={'47.7%'} left={'11%'}></Dot>
        <Dot id="15" small={true} top={'52.3%'} left={'12.8%'}></Dot>
        <Dot id="16" small={true} top={'59.3%'} left={'23.8%'}></Dot>
        <Dot id="17" small={true} top={'52.3%'} left={'66.8%'}></Dot>
        <Dot id="18" small={true} top={'58.3%'} left={'77.8%'}></Dot>

    </div>
    )
}