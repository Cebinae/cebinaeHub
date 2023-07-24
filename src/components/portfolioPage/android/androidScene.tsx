'use client'



import { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, Preload} from '@react-three/drei'
import { useTexture } from '@react-three/drei';
import {Model} from './Android'

import React from 'react'
import { useGLTF } from '@react-three/drei'


export default function AndroidScene() {


    // const texture = useTexture('3d/gltf/Phone.gltf')
    // const [texture1, texture2] = useTexture([texture1, texture2])

    return (
        <div className='bg-bg700 w-[60vw] h-[60vh]'>
            <Canvas onError={(e)=> console.log(e)}>
               <OrbitControls>
                <hemisphereLight position={[-0.003, 0.3, -0.003]} intensity={1}></hemisphereLight>
                <ambientLight intensity={1} position={[-0.003, 0.3, -0.003]}></ambientLight>
                <spotLight 
                    position={[-0.003, 0.3, -0.003]}
                    angle={0.3}
                    penumbra={0}
                    intensity={0.3}
                ></spotLight>
               </OrbitControls>
               {/* <meshStandardMaterial map={texture} /> */}
               <Suspense fallback={null}>
                    <Model></Model>
                <Preload all></Preload>
                </Suspense>
            </Canvas>
            </div>

    )
}