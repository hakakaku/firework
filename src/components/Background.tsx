import { Stars } from "@react-three/drei";

export const Background: React.FC = () => {
	return (
		<group position={[0, 100, 0]}>
			<Stars radius={120} depth={250} speed={3} />
			<mesh position={[0, -100, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[500, 500, 25, 25]} />
				<meshBasicMaterial wireframe wireframeLinecap="" color="gray" />
			</mesh>
		</group>
	);
};
