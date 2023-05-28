import React from "react";
import * as THREE from "three";

export const useGeometry = () => {
	const circleGeometry = React.useMemo(
		() => new THREE.CircleGeometry(2, 32),
		[]
	);
	const icosahedronGeometry = React.useMemo(
		() => new THREE.IcosahedronGeometry(1, 2),
		[]
	);
	const ball = React.useMemo(() => new THREE.IcosahedronGeometry(1, 4), []);

	const circlePoints = circleGeometry.getAttribute("position").array;
	const icosahedronPoints = icosahedronGeometry.getAttribute("position").array;

	const combinedPoints = new Float32Array(
		circlePoints.length + icosahedronPoints.length
	);

	combinedPoints.set(circlePoints);
	combinedPoints.set(icosahedronPoints, circlePoints.length);

	const saturn = new THREE.BufferGeometry().setAttribute(
		"position",
		new THREE.BufferAttribute(combinedPoints, 3)
	);

	return { ball, saturn } as const;
};
