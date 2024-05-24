import React from 'react'
import { useGLTF } from '@react-three/drei'

import birdScene from "../assets/3D/bird.glb";

const bird = () => {
    const bird = useGLTF(birdScene);
    //OR  --> const {scene} = useGLTF(birdScene);
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
        <primitive object={bird.scene}/>
    </mesh>
  )
}

export default bird