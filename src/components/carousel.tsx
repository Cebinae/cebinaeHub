// 'use client'

import politeh1 from '../../public/politeh/u1.jpg'
import politeh2 from '../../public/politeh/u2.jpg'
import politeh3 from '../../public/politeh/1_1_2.jpg'
import politeh4 from '../../public/politeh/21767458.jpg'
import politeh5 from '../../public/politeh/273265558_247281990798547_4658736952873659627_n-1024x684.jpg'
import politeh6 from '../../public/politeh/296138398_10224988639798095_3100299478318628079_n.jpg'
import Image from 'next/image'





export default function Carousel() {

    let politehPhotos = [politeh1, politeh2, politeh3, politeh4, politeh5, politeh6]
    let className = `w-[50vw] h-[45vh] bg-darkGreen flex flex-row justify-center items-center overflow-hidden`

    return (
        <section className={className}>
            <div className='h-[80%] w-[80%] bg-red flex flex-row justify-center justify-self-center items-center'>
                {politehPhotos.map((photo)=>{

                return  <Image src={photo} alt='politeh' className='height-[200px] width-[auto] ml-[5%]' height={200} ></Image>

                })}
            </div>
            <div className='bg-[white] w-[10%] h-[10%]'></div>
        </section>
    )
}