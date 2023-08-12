import { ReactElement } from "react"


export default function WebsiteCard(props:{
    article?:ReactElement, bgColor?:string
}) {

    return(
    <>
        <main className={`absolute  z-[9999] bottom-[5vh] bg-${props.bgColor?props.bgColor: 'bg700'} rotate-0  h-[65vh] w-[60vw]  flex flex-col 
        justify-center self-center ml-[auto] mr-[auto] left-[0] right-[0] opacity-[0.5]`}>
            {props.article? props.article:null}
        </main>
       
     </>

    )
}