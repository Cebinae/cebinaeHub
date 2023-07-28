'use client'

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";
import {useRef, useEffect} from 'react'
import {Stage} from '@react-three/drei'

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const materials = useLoader(MTLLoader, "/obj4/Phone.mtl");
  const obj = useLoader(OBJLoader, "/obj4/Phone.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  let ref = useRef()


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

  useFrame(({clock})=>{
    
    let time = clock.getElapsedTime()
    console.log(obj.children[0]);


    let starttime = 0;
    let initialPosition = 5;
    let targetPosition = 1;
    let animationDuration = 10; //

    obj.children[0].rotation.z += 0.01

    function calculatePosition(time:any) {
      // Рассчитываем прогресс анимации в диапазоне от 0 до 1
      var progress = time / animationDuration;
      // Применяем логарифмическую функцию для замедления
      var position = initialPosition + (targetPosition - initialPosition) * Math.log(1 + progress * 9);
      return position;
    }

    obj.children[0].position.x >0? obj.children[0].position.x = calculatePosition(time/10):null


  })


  

  return <primitive ref={ref} object={obj} scale={2} position={[0, 0, 0]} />;
};

export default function SecondPhone() {


  return (
    <div className="bg-bg700 h-[50vh] w-[50vw]">
      <Canvas>
      <ambientLight intensity={1} ></ambientLight>
      <axesHelper args={[5]} />
        <Suspense fallback={null}>
            <ambientLight intensity={1}></ambientLight>
          <Scene/>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}