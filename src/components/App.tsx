import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { NoToneMapping, Vector3 } from "three";

import { PortalScene } from "./PortalScene";

export default function App() {
  return (
    <Canvas flat id="canvas" gl={{ toneMapping: NoToneMapping }} camera={{ position: new Vector3(3, 3, 3) }}>
      <color attach="background" args={["#171720"]} />
      <OrbitControls />
      <PortalScene />
      <Perf position="top-left" />
    </Canvas>
  );
}
