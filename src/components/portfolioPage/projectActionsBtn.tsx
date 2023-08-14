export default function ActionsBtn (props:{isCebinaeHub?:boolean, isFirstRender?:boolean}){

    let wrapperClass = `${props.isCebinaeHub? 'bg-darkOrange z-[9999] ':'bg-darkOrange z-[999] '} 
    fixed top-[85vh] right-[5vw] text-lightPrimary
    rounded-xl overflow-hidden h-[50px] w-[200px] flex flex-row justify-evenly`

    return (
        <div className={wrapperClass}>
            <button style={{animationFillMode:'forwards', willChange:'transform'}} 
                className={`  rounded-l-xl  w-[50%]'
                ${props.isFirstRender? 'w-[50%]':'w-[0%]'}         
                ${props.isCebinaeHub? 'animate-btnCollapse ' :'bg-darkOrange '} hover:bg-[#d67a40]
                ${!props.isFirstRender&&!props.isCebinaeHub? 'animate-btnReveal':''}         
                `}>
                    {/* {console.log('isfirt', props.isFirstRender)} */}
                    <p>Download</p>
            </button>
            
            <button style={{willChange:'transform'}} className="flex-1 rounded-r-xl bg-darkOrange hover:bg-[#c26e3a] ">
                <a target="_blank" href={props.isCebinaeHub?'https://github.com/Cebinae/cebinaeHub/':'https://github.com/Cebinae/hiddenPetProjectRN'}>
                <div className="flex-1 flex flex-col justify-center h-[100%] text-middle">
                    <p>GitHub</p>
                </div>
                </a>
            </button>
            
        </div>
    )
}
// className="absolute top-[0] bottom-[0] mt-[-1px] mb-[-1px] h-[100%] w-[100%] align-middle bg-green"