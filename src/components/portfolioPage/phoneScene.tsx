'use client'



import { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, Preload} from '@react-three/drei'
import { useGLTF, useTexture } from '@react-three/drei';


import React from 'react'
// import {Model} from './Phone'

export default function PhoneScene() {


  const Model = (props) => {


    const group = useRef();
  
    const texture = useTexture({
      Cel: '3d/gltf/Cel.jpg',
      Camara: '3d/gltf/Camara.jpg',
      Blanco : '3d/gltf/Blanco.jpg',
      Emission : '3d/gltf/Emission.jpg',
    })
  
  
    const { nodes, materials } = useGLTF('/3d/gltf/Phone.gltf')
  
  
    return (
      <group {...props} ref={group} dispose={null}>
        <group position={[-0.056, 0.339, 0.147]} rotation={[-0.228, -0.438, 0.205]} scale={[1, 1.161, 1]}>
          <meshStandardMaterial {...texture}></meshStandardMaterial>
          <mesh geometry={nodes.objMesh_1.geometry} material={materials.Cel} texture={texture.Cel} />
          <mesh geometry={nodes.objMesh_2.geometry} material={materials.Camara} texture={texture.Camara}/>
          <mesh geometry={nodes.objMesh_3.geometry} material={materials.Blanco} texture={texture.Blanco}/>
          <mesh geometry={nodes.objMesh_4.geometry} material={materials.Emission} texture={texture.Emission} />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('/Phone.gltf')
  

    return (
        <div className='bg-lightOrange w-[60vw] h-[60vh]'>
            <Canvas onError={(e)=> console.log(e)}>
               <OrbitControls>
                <hemisphereLight intensity={1}></hemisphereLight>
                <ambientLight intensity={1} position={[1, 1, 1]}></ambientLight>
                <spotLight
                  intensity={0.5}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />
                
               </OrbitControls>
               <Suspense fallback={null}>
                  <Model></Model>
                </Suspense>
            </Canvas>
            </div>

    )
}