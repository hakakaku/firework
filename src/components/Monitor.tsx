import React from "react";
import { Stats } from "@react-three/drei";

type Props = {};

export const Monitor: React.FC<Props> = () => {
	return (
		<>
			<Stats showPanel={0} className="FPS"></Stats>
			<Stats showPanel={1} className="MS"></Stats>
			<Stats showPanel={2} className="MB"></Stats>
		</>
	);
};
