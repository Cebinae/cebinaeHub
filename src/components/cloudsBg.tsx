'use client'
import React from 'react'
import Plane from './plane/plane'
import websiteCard from './websiteCard'
import WebsiteCard from './websiteCard'

export default function CloudsBg() {
  
    let isFirstRender = React.useRef(true)
    let isFocused = React.useRef(true)
    let isRunning = React.useRef(false)
  
    React.useEffect(()=>{
      
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
          img.style.position = 'absolute'
          img.style.left = `-${width*1.5}px`
          img.style.willChange = 'transform'
          img.style.top = `3${top}0vh`
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
  
            //  await gsap.fromTo(`#cloud${i.toString()}${thread}`,{
            //     x:-400,
            //     y: randomY
            //   },{
            //     x:3000,
            //     duration:25,
            //     y:randomY,
            //     delay:getRandomInt(1,2),
            //     ease:'none',
  
            //     onComplete: ()=>{
            //       backgroundComp?.removeChild(cloudElem)
            //     }
            //   })
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
      isFirstRender.current&&document.visibilityState==='visible'&&isRunning.current===false?runAnimations():null



      
  
  
      return ()=>{
        window.removeEventListener('blur', ()=>isFocused.current = false)
        window.removeEventListener('focus', ()=>isFocused.current = true)
      }
  
  
    }, [])
  
  
  
    return (
      
      <main className='absolute flex flex-row justify-center items-start h-[100vh] w-[100vw] bg-bg1000 overflow-hidden' id='animatedBg'>
          {/* <Plane width={800}></Plane> */}
          <Plane width={500}></Plane>
          <WebsiteCard></WebsiteCard>
      </main>
            
    )
  }