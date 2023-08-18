import Image from "next/image"

export default function FeatureCard(props:{
    imgPrimary?:string, 
    imgSecondary?:string,
    textPrimary?:string,
    textSecondary?:string,

}) {
    return(

    <section style={{perspective:'1000px'}} className="group">
        <div style={{perspective:'1000px',
        animationFillMode:'forwards',
        transform:"rotateY(0deg)",
        animationDuration:'1s',
        willChange:'transform',
        transition:'1s',
        // animationDirection:'reverse',
    
        // transitionDuration:'0.8s',
        transformStyle:'preserve-3d'
        }} className=" group-hover:animate-cardPrimary animate-cardSecondary
        text-lightPrimary relative  rounded-xl 
        h-[65vmin] aspect-[8.5/16]  ">


            <Image style={{
                // // animationFillMode:"forwards",
                // transformStyle:'preserve-3d',
                // perspective:'1000px',
                backfaceVisibility:"hidden",
                transition:'1s',
                animationDuration:'1s',


                }} src={props.imgPrimary?props.imgPrimary:'/tolog.png'} alt=''
                className=" absolute z-[1] object-fill w-[100%] h-[100%] rounded-3xl border-2 border-bg700" height={300} width={300}>
            </Image>
            

            <Image style={{
                // animationFillMode:"forwards",
                // transformStyle:'preserve-3d',
                // perspective:'1000px',
                backfaceVisibility:"hidden",
                transform:'rotateY(180deg)',
                transition:'1s',
                animationDuration:'1s',



                }} src={props.imgSecondary?props.imgSecondary:'/wrongKeys.png'} alt=""
                className=" absolute z-[2] object-fill w-[100%] h-[100%] border-2 border-bg700 rounded-3xl" height={300} width={300}>
            </Image>
            



            <article style={{backfaceVisibility:'hidden'}} className=' absolute border-2 opacity-[0.7] z-[999] p-[3%] rounded-xl bg-bg700 bottom-[-2%] self-center 
            align-center left-[0] right-[0] ml-[auto] mr-[auto] w-[85%] h-[min] '>
                <p>{props.textPrimary}</p>
            </article>
            <article style={{backfaceVisibility:'hidden', transform:"rotateY(180deg)"}} 
                className=' absolute opacity-[0.7] z-[998] border-2 p-[3%] rounded-xl bg-bg700 bottom-[-2%] self-center align-center
                 left-[0] right-[0] ml-[auto] mr-[auto] w-[85%] h-[min] '>
                <p>{props.textSecondary}</p>
            </article>
        </div>
    </section>



    )
}