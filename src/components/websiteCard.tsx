import { ReactElement } from "react"


export default function WebsiteCard(props:{
    article?:ReactElement, bgColor?:string
}) {

    return(
    <>
        <main className={`absolute  z-[9999] bottom-[5vh] bg-${props.bgColor?props.bgColor: 'bg700'} rotate-0  
         2xl:w-[60vw]  2xl:h-[65vh]
         xl:w-[65vw] xl:h-[68vh]
         lg:w-[70vw] lg:h-[70vh]
         md:w-[80vw] md:h-[70vh]
         sm:w-[80vw] sm:h-[70vh]
         flex flex-col 
        justify-center self-center ml-[auto] mr-[auto] left-[0] right-[0] opacity-[0.5]`}>
            {props.article? props.article:null}
        </main>
       
     </>

    )
}