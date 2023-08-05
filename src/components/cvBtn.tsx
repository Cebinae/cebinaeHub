export default function CvBtn (){
    return(
    <div className="
        relative z-[0]
        group/btn
        flex flex-row justify-center items-center
        bg-transparent
        h-[80%] w-[15%] 
        rounded-3xl border-[2px] border-solid border-blue overflow-hidden 
        transition-all
        duration-1000
        ease-out
        overflow-shown   
        ">
        <div className="relative z-[1] bg-blue w-[100%] h-[300%]
        transform-gpu
        transition-all
        duration-500
        ease-out
        top-[300%]
        skew-y-[15deg]
        group-hover/btn:top-[-50%]

        "></div> 

        <p className="absolute z-[2] text-blue group-hover/btn:text-[white] text-lg">Get CV</p>

        <div className="
            group/note
            block
            rotate-[0deg]
            pointer-events-none
            shadow-[0_35px_0px_25px_rgba(23,25,26,1)]
            fixed z-[9999] h-[80vh] w-[20vw] bg-darkGreen 
            transform-gpu transition-all duration-500
            origin-bottom-left
            top-[10vh] right-[-22vw]
            group-hover/btn:rotate-[-20deg]
            group-hover/btn:top-[20vh]    group-hover/btn:right-[-20vw] group-hover:rotate-[-20deg] group-hover/btn:block

            "> 
                <p className="text-3xl text-lightPrimary">Resume</p>
            </div>
    </div>
    )
}

        //  flex flex-row justify-center items-center
        // hover:bg-blue       
        // group-hover:translate-x-[200px] group-hover:translate-y-[200px]


        // hover::before:translate-x-[200%] hover::before:translate-y-[200%]
