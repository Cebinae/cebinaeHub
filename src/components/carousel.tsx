'use client'

import politeh1 from '../../public/politeh/u1.jpg'
import politeh2 from '../../public/politeh/u2.jpg'
import politeh3 from '../../public/politeh/1_1_2.jpg'
import politeh4 from '../../public/politeh/21767458.jpg'
import politeh5 from '../../public/politeh/273265558_247281990798547_4658736952873659627_n-1024x684.jpg'
import politeh6 from '../../public/politeh/296138398_10224988639798095_3100299478318628079_n.jpg'
import Image from 'next/image'
import gsap from 'gsap'
import { useEffect , useRef, useState} from 'react'




export default function Carousel() {

    let leftBtnRef = useRef<HTMLDivElement>(null)
    let rightBtnRef = useRef<HTMLDivElement>(null)

    let [photosArr, setPhotos] = useState([politeh1, politeh2, politeh3, politeh4, politeh5, politeh6])



    let currPosition = useRef(0)

    let toRight = ()=>{
        gsap.to('#politehImg',{
            x:currPosition.current<-500?+0 : -500,
            duration:1,
            onComplete:()=>{currPosition.current<-1000?setPhotos((prevstate)=>{
                console.log('FIRED')
                let prev = prevstate.map(elem=>elem)
                let first = Object.assign(prev[0])
                prev.push(first)
                prev.shift()
                return prev
            }):null}
        })

        currPosition.current-=500

        console.log(currPosition.current)

        
        
    }

    let toLeft = ()=>{
        gsap.to('#politehImg',{
            x: currPosition.current +500,
            duration:1
        })
        currPosition.current+=500
        console.log('TO LEFT')

        console.log(currPosition.current)

        

    }



    useEffect(()=>{
        let cachedLeftBtn = leftBtnRef.current
        let cachedRightBtn = rightBtnRef.current

        cachedLeftBtn?.addEventListener('click',toLeft)
        cachedRightBtn?.addEventListener('click', toRight)

        return(()=>{
            cachedLeftBtn?.removeEventListener('click',toLeft)
            cachedRightBtn?.removeEventListener('click',toRight)
        })

    },[])



    let className = `absolute w-[50vw] h-[45vh] bg-darkGreen flex flex-row justify-center items-center overflow-hidden`



    return (
        <section className={className}>

            <div className='h-[80%] w-[80%] bg-red flex flex-row justify-start justify-self-center items-start'>
                {photosArr.map((photo)=>{

                return  <Image src={photo} alt='politeh' id='politehImg' className='relative left-[0px]] height-[100%] width-[auto]'  width={500} style={{willChange:"transform"}}></Image>

                })}
            </div>

            <div className='absolute w-[100%] h-[100%] flex flex-row justify-between'>
                <div ref = {leftBtnRef} className='bg-[black] w-[10%] h-[10%]'>
                    <p>to left</p>
                </div>
                <div ref = {rightBtnRef} className='bg-[black] w-[10%] h-[10%]'>
                    <p>to right</p>
                </div>
            </div>
        </section>
    )
}