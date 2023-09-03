import NavBtn from "./headerBtn";
import CvBtn from "./cvBtn";
export default function Header() {
    return(
        <div style={{willChange:'transform', transform:'translate(0)'}}className="bg-transparent absolute z-[9] w-full h-min flex flex-row justify-center align-center">
        <header className=" rounded-3xl text-lightPrimary shadow-[0_11px_25px_6px_rgba(0,0,0,0.4)] z-[9999] mt-[1.5vh] items-center sticky flex flex-row justify-evenly w-[80vw] h-[7vh] bg-bg100">
            <NavBtn title="Home" route="/"></NavBtn>
            <NavBtn title="Portfolio" route="/portfolio"></NavBtn>
            <NavBtn title="Contacts" route="/contacts"></NavBtn>

            <CvBtn></CvBtn>
        </header>
        </div>
    )
}