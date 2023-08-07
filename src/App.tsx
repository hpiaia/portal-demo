import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NoToneMapping, Vector3 } from "three";
import { Perf } from "r3f-perf";

import { PortalScene } from "./Scene";

export default function App() {
  return (
    <Canvas
      flat
      id="canvas"
      gl={{ toneMapping: NoToneMapping }}
      camera={{ position: new Vector3(3, 3, 3) }}
    >
      <color attach="background" args={["#171720"]} />

      <Perf position="top-left" />
      <OrbitControls />

      <PortalScene />
    </Canvas>
  );
}
