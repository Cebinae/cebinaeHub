// 'use client'

// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"
import styles from './stars.module.css'

export default function Dot(props:{
    small:boolean, id:string, top:string, left:string
}) {

    let id = props.id

    
    let getRandomInt =(min:number, max:number)=> {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min 
    }
    let delay = getRandomInt(1, 3)

    let animation = ()=>{
     return   [
        `animate-[stars1_8s_ease-in-out_infinite_2s]`,
        `animate-[stars2_6s_ease-in-out_infinite_3s]`,
        `animate-[stars3_10s_ease-in-out_infinite_4s]`
    ][getRandomInt(0, 3)]
}


    let big = `animate-[stars_2s_ease-in-out_infinite_2s]        w-[1rem] h-[1rem] relative z-[999] left-[${props.top}px] bg-blue rounded-[50%]`
    let small = `${animation()} relative w-[0.6rem] h-[0.7rem] relative z-[999] bg-blue rounded-[50%]`

    let styles ={
        top:props.top, 
        left:props.left, 
       
    
    }
    
    
    return(
        <div  className={props.small?small:big} style={styles} id={`star${id}`} ></div>
    )
}