import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

type Props = {
	maxHeight: number;
	color: string;
	position: [number, number, number];
};

export const Cannon: React.FC<Props> = ({ maxHeight, color, position }) => {
	const random = Math.random() * 10;

	const pointsRef = React.useRef<THREE.Points>(null!);

	const material = React.useMemo(
		() =>
			new THREE.PointsMaterial({
				size: 1,
				color: color,
				blending: THREE.AdditiveBlending,
				depthTest: false,
			}),
		[]
	);

	const geometry = React.useMemo(() => new THREE.IcosahedronGeometry(1, 4), []);

	useFrame((state, delta) => {
		const speed = 5 - pointsRef.current.position.y ** 1.1 / 50;

		pointsRef.current.position.x +=
			(Math.cos(random + state.clock.getElapsedTime() * 100) * speed) / 5;
		pointsRef.current.position.z +=
			(Math.cos(random + state.clock.getElapsedTime() * 100) * speed) / 5;
		pointsRef.current.position.y += speed;

		pointsRef.current.scale.setScalar(
			speed > 0.1 ? 1 : pointsRef.current.scale.x + delta * 25
		);

		material.opacity = speed > 0.1 ? 1 : material.opacity - delta / 2;
	});

	return (
		<points
			ref={pointsRef}
			position={position}
			material={material}
			geometry={geometry}
		></points>
	);
};
