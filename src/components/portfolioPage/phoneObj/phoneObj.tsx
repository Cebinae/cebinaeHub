'use client'

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";
import {useRef, useState, useEffect } from 'react'
import {Stage, AdaptiveDpr, Bvh} from '@react-three/drei'



THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

var shouldUpdate = true    // necessary to link 2 components, props dont work here, redux would be slow in loop


const Scene = (props:{isVisible:boolean}) => {
  // IMPORTANT!!! obj35, 30, 50... there are same models with different percent of polygons. Reduced in photoshop.
  // 100% way to laggy, but 30 look like crap. Seems like 35 is best. Still to test and decide...

  //sad. all is fine but camera at 35. have to try 40.

    const materials = useLoader(MTLLoader, "/newobj2056/Phone.mtl");
    const obj = useLoader(OBJLoader, "/newobj2056/Phone.obj", (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    });

    console.log(obj)

    const meshBox= new THREE.Box3().setFromObject(obj.children[0])
    const meshCenter = meshBox.getCenter(new THREE.Vector3())
    // obj.children[0].geometry.center()

    // obj.children[0].position.x = meshCenter.x
    obj.children[0].position.x = 5
    obj.children[0].position.y = meshCenter.y
    obj.children[0].position.z = meshCenter.z

    obj.children[0].rotation.x = 1.58
    obj.children[0].rotation.z = 0.025
    obj.children[0].rotation.y = 0.03
//seems like ready


    let starttime = 0;
    let initialPosition = 5;
    let targetPosition = 1;
    let animationDuration = 3; //

function calculatePosition(time:any) {
  // Рассчитываем прогресс анимации в диапазоне от 0 до 1
  var progress = time / animationDuration;
  // Применяем логарифмическую функцию для замедления
  return initialPosition + (targetPosition - initialPosition) * Math.log(1 + progress * 9);
  
}

const animate = (time:number)=>{
    obj.children[0].rotation.z += 0.03 
    if(obj.children[0].position.x >0){
        obj.children[0].position.x = calculatePosition(time/10) 
    }
    
    
}

  useFrame(({clock}, state, delta)=>{ 

    // console.log('LOOP IS STILL RUNNING')
    let time = clock.getElapsedTime()
    // console.log(state);
    shouldUpdate?animate(time):null
  })


  return (
      <primitive  object={obj} scale={2.2} position={[0, 0, 0]} />
  )
};



const DisableRender = () => useFrame(() => console.log('outer renderer'))


export default function SecondPhone() {
  let ref = useRef(null)
  let focused = useRef(true)
  let canvasRef = useRef(null)

  useEffect(()=>{
        const cachedRef = ref.current
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              let visible=()=>{
                shouldUpdate = true
                console.log('INTERSECTING', canvasRef.current)
                
              }
              let hidden=()=>{
                shouldUpdate = false
                console.log('NOT INTERSECTING')
              }
              entry.isIntersecting? visible(): hidden()
            });
          });

          cachedRef? observer.observe(cachedRef) : null
  }, [])


  return (
    <div ref={ref} style={{willChange:'transform'}} className="bg-bg400 h-[80vh] w-[61vw]">
      <Canvas ref={canvasRef} frameloop="always">

       {/* {!shouldUpdate? <DisableRender></DisableRender>:null} */}
      {/* <axesHelper args={[15]} /> */}
        <Suspense fallback={null}>
            <ambientLight intensity={2}></ambientLight>

          {/* <Bvh firstHitOnly> */}
            <Scene isVisible={focused.current}/>
          {/* </Bvh> */}

          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}