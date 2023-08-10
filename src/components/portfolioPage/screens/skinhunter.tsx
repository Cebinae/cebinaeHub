// import AndroidObj from "../androidObj/androidObj";
import SecondPhone from "../phoneObj/phoneObj";
// import PhoneScene from "../phoneScene";


export default function SkinhunterFirst() {

    let keywordSpan = "font-semibold text-lg"
    return(
        <div className="w-[100vw] relative z-[1] h-[100vh] bg-bg400  flex flex-col justify-start align-start ">

        <main className="z-[999] absolute h-[100vh]">
            <div>
                <h1 className=" relative text-9xl text-lightPrimary mt-[14vh] ml-[3vw]">SkinHunter</h1>
            </div>

            <article>
                {/* <p className="text-lg text-lightPrimary ml-[3vw] mt-[1vh]" >is a pet-project with a real commercial use</p> */}
                <p className="text-lg text-lightSecondary w-[53vw] ml-[3vw] mt-[5vh] ml-[3vw]">
                is a pet-project with a real commercial use. The main purpose of this application is to provide an infinite monitoring of marketplace
                according to configuration
                and instantly notificate user when a profitable offer was found
                   
                </p>
            </article>

            <article className="absolute bottom-[15vh]">
                <p className="text-3xl font-semibold text-green ml-[3vw] mt-[5vh]">Technologies</p>
                <p className="text-lg  text-lightSecondary w-[53vw] ml-[3vw] mt-[5vh]">
                    SkinsHunter is a <span className={keywordSpan}>React Native</span> application written on <span className={keywordSpan}>TypeScript</span>. 
                    Since the beginning it was using <span className={keywordSpan}>ExpoCLI</span> and then 
                    was ejected in favor of <span className={keywordSpan}>NativeCLI</span> to achieve an advanced control above native side (<span className={keywordSpan}>gradle</span> build optimisation & android theme styling).
                    The main business logic is executing inside <span className={keywordSpan}>background service</span> provided by <span className={keywordSpan}>native library rn-background-actions </span>
                     which allows to keep app always alive and still to send <span className={keywordSpan}>push-notifications</span> via <span className={keywordSpan}>Notifee</span>.
                    There're two layers of security in this application - it both uses marketplace's secured <span className={keywordSpan}>REST-API</span> with hash-managed SSH authorisation
                    (Ed25519) and store keys into encrypted store of <span className={keywordSpan}>rn-keychain</span> aside from unsensitive 
                    data kept in <span className={keywordSpan}>async-storage</span> and synchronized by 
                    <span className={keywordSpan}> redux-persist</span>. Surely, the list of used technoliges is much wider and can be seen at GitHub repository into package.json file.

                </p>
            </article>
            </main>
            <div className="absolute z-[1] bottom-[10vh] bg-green right-[0]">
                {/* <AndroidObj></AndroidObj> */}
                <SecondPhone></SecondPhone>
                {/* <PhoneScene></PhoneScene> */}
            </div>
        

        </div>
    )
}