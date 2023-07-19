export default function Dot(props:{
    small:boolean, id:string, top:string, left:string
}) {

    let big = `w-[1rem] h-[1rem] relative z-[999] left-[${props.top}px] bg-blue rounded-[50%]`
    let small = `w-[0.6rem] h-[0.7rem] relative z-[999] bg-blue rounded-[50%]`

    let id = props.id
    
    return(
        <div style={{top:props.top, left:props.left }} className={props.small?small:big} id={id}></div>
    )
}