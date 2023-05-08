import React from "react";
import { Canvas } from "@react-three/fiber";
import { Background } from "./components/Background";
import { Control } from "./controls/Control";
import { Cannon } from "./components/Cannon";
import { Monitor } from "./components/Monitor";

type Cannon = {
	maxHeight: number;
	color: string;
	position: [number, number, number];
};

const randomColor = () => {
	const colors = ["red", "green", "blue", "yellow", "pink", "purple"];
	return colors[Math.floor(Math.random() * colors.length)];
};

export const App: React.FC = () => {
	const [cannons, setCannons] = React.useState<Cannon[]>([]);

	const handleLaunch = () => {
		const newCannons: Cannon[] = Array.from({ length: 5 }, (_, i) => ({
			maxHeight: 100 + Math.random() * 20,
			color: randomColor(),
			position: [Math.random() * 300 - 150, 0, Math.random() * 300 - 150],
		}));
		setCannons((cannons) => [...cannons, ...newCannons]);
	};

	return (
		<Canvas onClick={handleLaunch} camera={{ position: [200, 200, 200] }}>
			<Monitor />
			<Control />
			<Background />
			{cannons.map((props, i) => (
				<Cannon key={i} {...props} />
			))}
		</Canvas>
	);
};

export default App;
