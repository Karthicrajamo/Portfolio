import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3D/bird.glb";
import { useFrame } from "@react-three/fiber";

const bird = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const birdRef = useRef();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { scene, animations } = useGLTF(birdScene);
	//OR  --> const bird = useGLTF(birdScene);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { actions } = useAnimations(animations, birdRef);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		actions["Take 001"].play();
	}, []);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useFrame(({ clock, camera }) => {
		birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

		if (birdRef.current.position.x > camera.position.x + 10) {
			birdRef.current.rotation.y = Math.PI;
		} else if (birdRef.current.position.x < camera.position.x - 10) {
			birdRef.current.rotation.y = 0;
		}

		if (birdRef.current.rotation.y === 0) {
			birdRef.current.position.x += 0.01;
			birdRef.current.position.z -= 0.01;
		} else {
			birdRef.current.position.x -= 0.01;
			birdRef.current.position.z += 0.01;
		}
	});

	return (
		<mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
			<primitive object={scene} />
		</mesh>
	);
};

export default bird;
