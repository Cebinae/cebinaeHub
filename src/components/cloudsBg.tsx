'use client'
import React from 'react'
import Plane from './plane/plane'
import WebsiteCard from './websiteCard'
import { useRef, useState } from 'react'
import ActionsBtn from './portfolioPage/projectActionsBtn'
import { useRouter } from 'next/navigation'

export default function CloudsBg() {
    const router = useRouter();
    let isFirstRender = React.useRef(true)
    let btnFirstRender = useRef(true)

    let isFocused = React.useRef(true)
    let isRunning = React.useRef(false)

    let bgRef = useRef(null)
    let [planeVisible, setPlane] = useState(false)
  
    React.useEffect(()=>{
      btnFirstRender.current=true

      let cachedRef = bgRef.current

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting?setPlane(true):setPlane(false)
          
          
        });
      });

      cachedRef? observer.observe(cachedRef) : null
      
      window.addEventListener('blur', ()=>isFocused.current = false)
      window.addEventListener('focus', ()=>isFocused.current = true)
  
      console.log('RENDERED')
      let windowHeight = window.innerHeight //excluding footer and header
      let headerHeight = Math.ceil(windowHeight/100*10+300)
      let footerHeight = windowHeight/100*14
  
  
      let getRandomInt =(min:number, max:number)=> {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min //Максимум не включается, минимум включается
      }
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
      
          
      let createCloudElement = (id:string, thread:string, height:number, width:number, top:number)=>{
          let img = document.createElement('img')
          img.height = height
          img.width = width
          img.id = `cloud${id}${thread}`
          img.className = `animate-cloudsToRight`
          img.style.zIndex = id
          img.style.position = 'relative'
          img.style.left = `-${width*1.5}px`
          img.style.willChange = 'transform'
          img.style.top = `-${top}0%`
          img.style.transform = 'translateZ(0)'
          img.src = `/clouds/${getRandomInt(1, 10).toString()}.svg`
          return img
      }
  
      let backgroundComp = document.getElementById('animatedBg')  
  
  
      let animate = async (thread:string)=>{
        isFirstRender.current=false
          for (let i=0; true; i++){
            isRunning.current = true
                // console.log('thread ', thread, 'value', i);
                // await sleep(3000)
  
              let cloudElem = createCloudElement( i.toString() , thread, 50, 100, getRandomInt(1, 9))
              backgroundComp?.appendChild(cloudElem)
              let randomY = getRandomInt(1, 6)*100
  
            await sleep(20000)
            backgroundComp?.removeChild(cloudElem)
         
          }
      }
  
      function divideMilliseconds(milliseconds:number) {
        let segments = [];
      
        for (var i = 0; i < 8; i++) {
          var randomLength = Math.floor(Math.random() * milliseconds / 8);
          segments.push(randomLength);
          milliseconds -= randomLength;
        }
      
        return segments;
      }
  
      let randomDelays = divideMilliseconds(100000)
  
      let runAnimations = async ()=>{
        animate('default')
        await sleep(randomDelays[1])
        animate('second')
        await sleep(randomDelays[2])
        animate('third')
        await sleep(randomDelays[3])
        animate('fourth')
        await sleep(randomDelays[4])
        animate('fifth')
        await sleep(randomDelays[5])
        animate('sixth')
        await sleep(randomDelays[6])
        animate('seventh')
        // await sleep(randomDelays[7])
        // animate('eighth')
        // await sleep(randomDelays[0])
  
  
  
      }
      isFirstRender.current&&document.visibilityState==='visible'&&planeVisible&&isRunning.current===false?runAnimations():null



      
      
      // bcs animation logic depends on if first render or not, see props usage
      //it breaks after route chage bcs ref persists state on return to this page
      //so now i refresh btnFirstRender to prevent unwanted animation triggered by !planeVisible&&!firstRender

      return ()=>{
        window.removeEventListener('blur', ()=>isFocused.current = false)
        window.removeEventListener('focus', ()=>isFocused.current = true)
        console.log('route change')
        btnFirstRender.current=true
      }
  
  
    }, [])
  
  
    return (
      
      <main ref={bgRef} className='relative z-[1] flex flex-row justify-center  h-[100vh] w-[100vw] bg-bg400 overflow-hidden' id='animatedBg'>
          {/* <Plane width={800}></Plane> */}
          {planeVisible?<Plane width={500}></Plane>:null}
          {/* {btnFirstRender.current=true} */}

          <ActionsBtn isCebinaeHub={planeVisible} isFirstRender={btnFirstRender.current}></ActionsBtn>
          {btnFirstRender.current=false}
          <WebsiteCard></WebsiteCard>
      </main>
            
    )
  }