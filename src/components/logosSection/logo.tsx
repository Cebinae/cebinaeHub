

export default function TechLogo(props:{
    title:string, logoPath:string, delay:string
}){



    // animate-[logo_1s_ease-in-out_1]
//вот вообще тут ничего не трогай

    return(
        <div style={{willChange:'transform',
            animationName:'logo, logoWiggle',
            animationDelay:`0s, 2s`,
            animationDuration:`1s, 8s`,
            animationTimingFunction:'ease-in, linear',
            animationIterationCount:'1, infinite'

        }} className="relative text-lightPrimary animate-[logoWiggle_5s_linear_infinite] 2xl:w-[10vw] xl:w-[10vw] lg:w-[10vw] md:w-[12vh]
         h-[100%] text-center flex flex-col items-center  ">

            <div className="absolute bg-[black] opacity-[0.6] blur-md w-[100%] h-[100%] 2xl:rounded-3xl xl:rounded-3xl lg:rounded-3xl  md:rounded-[50%] bg-gradient-to-b from-bg700 "></div>
            <img src={props.logoPath} alt="react" width={150} height={150} style={{willChange:'transform'}} 
            // className="shadow-[4px_11px_58px_18px_rgba(0,0,0,0.74)] rounded-xl"
            ></img>
            <h1 style={{willChange:'transform'}}>{props.title}</h1>
        </div>
    )
}