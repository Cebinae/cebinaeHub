'use client'
import { useEffect, useRef, useState } from "react";
import Note from './note'

export default function EduNote (){

let currElem  = useRef<HTMLDivElement>(null)
const [visible, setVisible] = useState(false)


    useEffect(()=>{
        const cachedRef = currElem.current
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
               console.log('VISIIIIBLE AHAHAAH')
               setVisible(true)
              }
            });
          });
          cachedRef? observer.observe(cachedRef) : null          
    },[])

    return(
        <div ref={currElem}>
            {visible? <Note></Note> : null }
        </div>
    )
}