import Image from "next/image"

export default function FeatureCard(props:{
    imgPrimary?:string, 
    imgSecondary?:string,
    text?:string
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
        }} className="w-[20vw]  group-hover:animate-cardPrimary animate-cardSecondary relative h-[65vmin] rounded-xl ">


            <Image style={{
                // // animationFillMode:"forwards",
                // transformStyle:'preserve-3d',
                // perspective:'1000px',
                backfaceVisibility:"hidden",
                transition:'1s',
                animationDuration:'1s',


                }} src="/logged.png" alt=''
                className=" absolute z-[1] w-[100%] h-[100%] rounded-3xl" height={300} width={300}>
            </Image>
            

            <Image style={{
                // animationFillMode:"forwards",
                // transformStyle:'preserve-3d',
                // perspective:'1000px',
                backfaceVisibility:"hidden",
                transform:'rotateY(180deg)',
                transition:'1s',
                animationDuration:'1s',



                }} src="/wrongKeys.png" alt=""
                className=" absolute z-[2]  w-[100%] h-[100%] rounded-3xl" height={300} width={300}>
            </Image>
            



            <article className=' absolute opacity-[0.7] z-[999] p-[3%] rounded-xl bg-bg700 bottom-[-2%] self-center align-center left-[0] right-[0] ml-[auto] mr-[auto] w-[80%] h-[min] '>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium quis amet perspicia.</p>
            </article>
        </div>
    </section>



    )
}