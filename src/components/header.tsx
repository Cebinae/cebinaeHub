import NavBtn from "./headerBtn";

export default function Header() {
    return(
        <div style={{willChange:'transform'}}className="bg-transparent absolute z-[9999] w-full h-min flex flex-row justify-center align-center">
        <header className=" rounded-3xl animate-headerAppear shadow-[0_11px_25px_6px_rgba(0,0,0,0.4)] z-[9999] mt-[1.5vh] items-center sticky flex flex-row justify-evenly w-[80vw] h-[7vh] bg-bg100">
            <NavBtn title="Home" route="/"></NavBtn>
            <NavBtn title="Portfolio" route="asda"></NavBtn>
            <NavBtn title="Contacts" route="/contacts"></NavBtn>

            <div className="bg-transparent flex flex-row justify-center items-center h-[80%] w-[15%] rounded-3xl border-[2px] border-solid border-blue">
                <p className="text-blue text-lg">Get CV</p>
            </div>
        </header>
        </div>
    )
}