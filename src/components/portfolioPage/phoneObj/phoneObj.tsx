'use client'

import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";
import {useRef, useState, useEffect } from 'react'


THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

var shouldUpdate = true    // necessary to link 2 components, props dont work here, redux would be slow in a loop


const Scene = () => {
  // IMPORTANT!!! obj35, 30, 50... these are the same models but with different percent of polygons. Reduced in photoshop.
  // 100% way to laggy, but 30 look like crap. Seems like 35 is best. Still to test and decide...

  //sad. all is fine but camera looses shape at 35%. have to try 40.

    const materials = useLoader(MTLLoader, "/obj2056newtexture/Phone.mtl");
    const obj = useLoader(OBJLoader, "/obj2056newtexture/Phone.obj", (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    });
  //ok, 2056 polygons is a bare minimum

    // console.log(obj)

    // const meshBox= new THREE.Box3().setFromObject(obj.children[0])
    // const meshCenter = meshBox.getCenter(new THREE.Vector3())
    // obj.children[0].geometry.center()

    // obj.children[0].position.x = meshCenter.x
    obj.children[0].position.x = 5
    // obj.children[0].position.y = meshCenter.y
    // obj.children[0].position.z = meshCenter.z

    obj.children[0].rotation.x = 1.58
    obj.children[0].rotation.z = 0.025
    obj.children[0].rotation.y = 0.03
//seems like ready
//  let {scene} = useThree()
//  scene.overrideMaterial = new MeshBasicMaterial({ color: "green" });
//  console.log(obj)

  

  

//! 
  // let starttime = 0;
  // let initialPosition = 5;
  // let targetPosition = 1;
  // let animationDuration = 3; 

  // function calculatePosition(time:any) {
  //   // Рассчитываем прогресс анимации в диапазоне от 0 до 1
  //   var progress = time / animationDuration;
  //   // Применяем логарифмическую функцию для замедления
  //   return initialPosition + (targetPosition - initialPosition) * Math.log(1 + progress * 9);
  // }
//INITIAL LOGIC TO BE OPTIMISED, SEE BELOW
//this comment will not be deleted so i can still recognize what's goin on below, its the same function, can uncomment and check
//FUNCTION BELOW IS THE SAME, BUT FASTER, it rly affects that crazy loop
//!

// const calculatePosition =(time:any) =>{
//   return 5 + (-4 * Math.log(1 +(time*3)));
// } //The best approach if use 'clean' function, but not the best for runtime optimizer

let doesReached = false

//!
// const animate = (time:number)=>{
//     obj.children[0].rotation.z += 0.03 
//     if(obj.children[0].position.x >0){
//         obj.children[0].position.x = calculatePosition(time/10) 
//     }      
// } INITIAL VERSION OF ANIMATION FUNCTION


// const animate = (time:number)=>{
//   obj.children[0].rotation.z += 0.03 
//   if(!doesReached&&obj.children[0].position.x >0){
//       obj.children[0].position.x = calculatePosition(time/10) 
//   }
//   else{doesReached=true}      
// } ok, thats better, but still can be faster,
// doesReached allows not to check second condition (its expensive) if first condition is not fulfilled
//!



// let xPosition = (position:any, time:number)=>{
//   position.x>0?position.x=calculatePosition(time/10):null
// } ok, its better not to create FNC, but do it directly into ternary

const mesh = obj.children[0]
// let meshRotZ = mesh.rotation.z //!this doesnt work, cuz its primitive, not an object(not a live link to property)
const meshRot = mesh.rotation //but this does!
const meshPos = mesh.position


// const calculatePosition =(time:any) =>{
//   meshPos.x =  5 + (-4 * Math.log(1 +(time*3)));
// } not sure if better than clean version, see no difference

// const animate = (time:number)=>{
//   meshRot.z += 0.03 
//   {!doesReached?xPosition(meshPos, time):null}
// } //unreadable, but rly faster. To understand check commented above, that's the same logic


// const animate = (time:number)=>{
//   meshRot.z += 0.03 
//   !doesReached?(meshPos.x>0? meshPos.x = calculatePosition(time/10):null):null
// } 

const animate = (time:number)=>{
  meshRot.z += 0.03
  !doesReached&&meshPos.x>0?     meshPos.x= 5 + (-4 * Math.log(1 +(time/4))):null
    
}



//seems like it's the best approach, unreadable, but rly faster. 
  //check commented above to understand, that's the same logic

  //TO COMPARE PERFORMANCE TO INITIAL VERSION 
  //uncomment initial versions of 'animate' and 'calculatePosition' function
  //and comment their current versions

  useFrame(({clock})=>{ 
    shouldUpdate?animate(clock.getElapsedTime()):null
  })
  const scale = 2.2
  const position = [0,0,0]
  return (
      <primitive  object={obj} scale={scale} position={position} />
  )
};



// const DisableRender = () => useFrame(() => console.log('outer renderer'))


export default function SecondPhone() {
  let ref = useRef(null)
  let focused = useRef(true)
  // let canvasRef = useRef(null)

  useEffect(()=>{
        const cachedRef = ref.current
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              let visible=()=>{
                shouldUpdate = true
                // console.log('INTERSECTING', canvasRef.current)
                
              }
              let hidden=()=>{
                shouldUpdate = false
                // console.log('NOT INTERSECTING')
              }
              entry.isIntersecting? visible(): hidden()
            });
          });

          cachedRef? observer.observe(cachedRef) : null
  }, [])


  return (
    <div ref={ref} style={{willChange:'transform'}} className="bg-bg400 h-[80vh] w-[61vw] left-[7vw] z-[1]">

      <Suspense>
      <Canvas 
      //  ref={canvasRef}
      // dpr={1}
      className="absolute z-[9999]"
       >

      
       {/* {!shouldUpdate? <DisableRender></DisableRender>:null} */}
      {/* <axesHelper args={[15]} /> */}
        {/* <Suspense fallback={null}> */}
            <ambientLight intensity={2}></ambientLight>

          {/* <Bvh firstHitOnly> */}
            <Scene 
            // isVisible={focused.current}
            />
          {/* </Bvh> */}

          {/* <OrbitControls /> */}
        {/* </Suspense> */}
      </Canvas>
      </Suspense>
    </div>
  );
}