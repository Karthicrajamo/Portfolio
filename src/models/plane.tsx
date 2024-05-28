import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { Mesh } from 'three';
import { AnimationAction } from 'three'; // Import AnimationAction from Three.js

// Check the import path for your GLB file
import planeScene from "../assets/3D/plane.glb";

interface PlaneProps {
  isRotating: boolean;
}
// interface PlaneProps {
//   isRotating: boolean;
//   position: [number, number, number];
//   scale: [number, number, number];
//   rotation: [number, number, number];
// }

const Plane: React.FC<PlaneProps> = ({ isRotating, ...props }) => {
  // Initialize ref with null or undefined
  const ref = useRef<Mesh | null>(null);

  // Load GLTF model and animations
  const { scene, animations } = useGLTF(planeScene);

  // Initialize animation actions
  const { actions } = useAnimations(animations, ref);

  // Refine the type of 'actions' to handle possible null values
  const refinedActions: { [x: string]: AnimationAction | null } = actions;

  // Control animation based on isRotating prop
  useEffect(() => {
    if (ref.current) { // Check if ref is not null
      const action = refinedActions["Take 001"];
      if (action) { // Check if action is not null
        if (isRotating) {
          action.play();
        } else {
          action.stop();
        }
      }
    }
  }, [isRotating, refinedActions]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Plane;
