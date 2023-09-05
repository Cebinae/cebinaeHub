'use client'

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";
import {useRef, useEffect } from 'react'


THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

var shouldUpdate = true    

//! ALL THE COMMENTS ARE IN THE DEV/ BRANCH, all is explained there, dnt try to understand without it

const Scene = () => {
    const materials = useLoader(MTLLoader, "/objGreen2056/Phone.mtl");
    const obj = useLoader(OBJLoader, "/objGreen2056/Phone.obj", (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    });
    
    // let doesReached = false

    const mesh = obj.children[0]
    const meshRot = mesh.rotation 
    const meshPos = mesh.position

    meshPos.x = 5
    meshRot.x = 1.58
    meshRot.y = 0.025
    meshRot.z = 0.03

    const scale = 2.3
    const position = [0,0,0]
 
    const preRot = 0.015
    const rot = 0.009
    const initialMovement  = (time:number)=>{
      meshPos.x= 3.65 + (-2.65 * Math.log(1 +(time/8)))
      meshRot.z += preRot
    }
    const animate = (time:number)=>{
    meshPos.x>0.7?  initialMovement(time): meshRot.z += rot
    }

  useFrame(({clock})=>{ 
    shouldUpdate?animate(clock.getElapsedTime()):null
  })
  
  return (
      <primitive  object={obj} scale={scale} position={position} />
  )
};





export default function SecondPhone() {
  let ref = useRef(null)

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
    <div ref={ref} 
      // style={{willChange:'transform'}}
     className="bg-bg400 h-[80vh] w-[61vw] z-[1]">
      <Suspense>
      <Canvas className="absolute z-[9999]">
            <ambientLight intensity={2}></ambientLight>
            <Scene/>
      </Canvas>
      </Suspense>
    </div>
  );
}