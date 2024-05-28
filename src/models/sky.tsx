import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3D/sky.glb";

interface SkyProps {
  isRotating: boolean;
}

const Sky: React.FC<SkyProps> = ({ isRotating }) => {
  const { scene } = useGLTF(skyScene);
  const skyRef = useRef<Mesh | null>(null);

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
