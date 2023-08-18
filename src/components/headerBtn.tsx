import Link from "next/link"

export default function NavBtn(props:{
    title:string, route:string
}) {
    return(
        <Link className="w-[200px] h-min" href={props.route}>
            <p className="text-xl text-white hover:scale-[1.04] text-center duration-150 will-change-transform">{props.title}</p>
        </Link>
    )
}