import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { NoToneMapping, Vector3 } from 'three'

import { PortalScene } from './PortalScene'

export default function App() {
  return (
    <Canvas id="canvas" gl={{ toneMapping: NoToneMapping }} camera={{ position: new Vector3(3, 3, 3) }}>
      <color attach="background" args={['#171720']} />
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2 - 0.1} />
      <PortalScene />
    </Canvas>
  )
}
