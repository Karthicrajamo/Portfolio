import React from 'react'
import { useGLTF } from '@react-three/drei'

import planeScene from "../assets/3D/plane.glb";

const plane = ({isRotating, ...props}) => {
    const plane = useGLTF(planeScene);
  return (
    <mesh {...props}>
        <primitive object={plane.scene}/>
    </mesh>
  )
}

export default plane