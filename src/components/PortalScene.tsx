import { Sparkles, useGLTF, useTexture } from '@react-three/drei'
import { type GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    baked: THREE.Mesh
    poleLightA: THREE.Mesh
    poleLightB: THREE.Mesh
    portalLight: THREE.Mesh
  }
}

export function PortalScene() {
  const texture = useTexture('/model/baked.jpg')
  const model = useGLTF('/model/portal.glb') as GLTFResult

  return (
    <group>
      <mesh geometry={model.nodes.baked.geometry}>
        <meshBasicMaterial map={texture} map-flipY={false} />
      </mesh>

      <mesh geometry={model.nodes.poleLightA.geometry} position={model.nodes.poleLightA.position}>
        <meshBasicMaterial color="#ffffe5" />
      </mesh>

      <mesh geometry={model.nodes.poleLightB.geometry} position={model.nodes.poleLightB.position}>
        <meshBasicMaterial color="#ffffe5" />
      </mesh>

      <mesh
        geometry={model.nodes.portalLight.geometry}
        position={model.nodes.portalLight.position}
        rotation={model.nodes.portalLight.rotation}
      >
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <Sparkles size={6} scale={[4, 2, 4]} position-y={1} speed={0.2} count={40} />
    </group>
  )
}

useGLTF.preload('/model/portal.glb')
