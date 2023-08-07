import { type GLTF } from "three-stdlib";
import { Sparkles, useGLTF, useTexture } from "@react-three/drei";

type GLTFResult = GLTF & {
  nodes: {
    baked: THREE.Mesh;
    poleLightA: THREE.Mesh;
    poleLightB: THREE.Mesh;
    portalLight: THREE.Mesh;
  };
};

export function PortalScene() {
  const { nodes } = useGLTF("/model/portal.glb") as GLTFResult;
  const texture = useTexture("/model/baked.jpg");

  return (
    <group>
      <mesh geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={texture} map-flipY={false} />
      </mesh>

      <mesh
        geometry={nodes.poleLightA.geometry}
        position={nodes.poleLightA.position}
      >
        <meshBasicMaterial color="#ffffe5" />
      </mesh>

      <mesh
        geometry={nodes.poleLightB.geometry}
        position={nodes.poleLightB.position}
      >
        <meshBasicMaterial color="#ffffe5" />
      </mesh>

      <mesh
        geometry={nodes.portalLight.geometry}
        position={nodes.portalLight.position}
        rotation={nodes.portalLight.rotation}
      >
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <Sparkles
        size={6}
        scale={[4, 2, 4]}
        position-y={1}
        speed={0.2}
        count={40}
      />
    </group>
  );
}

useGLTF.preload("/model/portal.glb");
