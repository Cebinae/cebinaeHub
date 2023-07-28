'use client'

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";


THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());




const Scene = () => {

    let modelRef = useRef()

    const materials = useLoader(MTLLoader, "/lighterAndroidObj/Android.mtl");
    const obj = useLoader(OBJLoader, "/lighterAndroidObj/Android.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);})

    // console.log(obj)
    useFrame(() => {
       
      console.log(modelRef.current)
      obj.children[0].rotation.y -= 0.03


      });

  // console.log(modelRef.current);
  return (
     <primitive ref={modelRef} object={obj} scale={0.7} position={[0, 0, 0]} />
  )

};

export default function AndroidObj() {
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