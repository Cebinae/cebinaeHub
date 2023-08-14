export default function Contact (props:{
    label:string, linkText:string, link?:string
}){
    return (
    <a href={props.link}  target="_blank" className="flex hover:text-bg100 flex-row mr-[1vw] z-[1] flex-nowrap mt-[3vmin] text-[2.2vh] cursor-pointer">
        <p className="justify-self-start whitespace-nowrap">{props.label}</p>
        <p className="grow overflow-hidden text-elipsis whitespace-nowrap">............................................................................................................................................................................................</p>
        <p className="justify-self-end flex-nowrap whitespace-nowrap">{props.linkText}</p>
    </a> 
    )
}