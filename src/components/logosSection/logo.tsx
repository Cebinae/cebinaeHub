


export default function TechLogo(props:{
    title:string, logoPath:string, delay:string
}){



    // animate-[logo_1s_ease-in-out_1]


    return(
        <div style={{willChange:'transform',
            animationName:'logo, logoWiggle',
            animationDelay:`0s, ${props.delay}s`,
            animationDuration:`1s, 8s`,
            animationTimingFunction:'ease-in, linear',
            animationIterationCount:'1, infinite'

        }} className="relative    w-[10vw] h-[5vh] ">
            <img src={props.logoPath} alt="react" width={150} height={150} style={{willChange:'transform'}} 
            ></img>
            <h1 style={{willChange:'transform'}}>{props.title}</h1>
        </div>
    )
}