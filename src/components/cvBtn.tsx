

export default function CvBtn (){
    return(
    <a href={'/CV4.pdf'} download={'Cebinae_Ilya_Bielorov_CV'} className="
        relative z-[9991]
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
        <div style={{willChange:'transform'}} className="relative z-[9992] bg-blue w-[100%] h-[300%]
        transform-gpu
        transition-all
        duration-500
        ease-out
        top-[300%]
        skew-y-[15deg]
        group-hover/btn:top-[-50%]

        "></div> 

        <p className="absolute z-[9993] text-blue group-hover/btn:text-[white] text-lg">Get CV</p>

        <div style={{willChange:'transform'}} className="
            group/note
            block
            rotate-[0deg]
            pointer-events-none
            shadow-[0_35px_0px_25px_rgba(23,25,26,1)]
            fixed z-[-9999999999]  bg-darkGreen 
         transition-all duration-500
            origin-bottom-left
            2xl:h-[80vh] xl:h-[80vh] lg:h-[70vh] 
            2xl:w-[21vw] xl:w-[21vw] lg:w-[25vw]
            md:h-[40vh] md:w-[25vw]

            top-[10vh] 
            2xl:right-[-23vw] xl:right-[-23vw] lg:right-[-27vw]
            2xl:group-hover/btn:right-[-21vw] xl:group-hover/btn:right-[-21vw] lg:group-hover/btn:right-[-27vw]

            group-hover/btn:rotate-[-20deg]
            group-hover/btn:top-[20vh]     group-hover:rotate-[-20deg] group-hover/btn:block

            "> 
                <p className="text-3xl absolute z-[2] ml-[1vh] text-lightPrimary">Resume</p>
            </div>
    </a>
    )
}

        //  flex flex-row justify-center items-center
        // hover:bg-blue       
        // group-hover:translate-x-[200px] group-hover:translate-y-[200px]


        // hover::before:translate-x-[200%] hover::before:translate-y-[200%]
