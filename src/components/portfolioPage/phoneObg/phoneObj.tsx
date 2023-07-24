'use client'

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const materials = useLoader(MTLLoader, "/obj2/Phone.mtl");
  const obj = useLoader(OBJLoader, "/obj2/Phone.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={0.4} />;
};

export default function SecondPhone() {
  return (
    <div className="bg-bg700 h-[50vh] w-[50vw]">
      <Canvas>
      <ambientLight intensity={1} ></ambientLight>

        <Suspense fallback={null}>
            <ambientLight intensity={1}></ambientLight>
          <Scene/>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}