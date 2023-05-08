import { OrbitControls } from "@react-three/drei";

export const Control: React.FC = () => {
	return (
		<OrbitControls
			enablePan={false}
			maxPolarAngle={Math.PI / 2}
			minDistance={50}
			maxDistance={500}
		/>
	);
};
