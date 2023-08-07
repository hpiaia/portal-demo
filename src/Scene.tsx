import { type GLTF } from "three-stdlib";
import {
  Sparkles,
  shaderMaterial,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Color, ShaderMaterial } from "three";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import portalVertexShader from "./shaders/vertex.glsl";
import portalFragmentShader from "./shaders/fragment.glsl";

type GLTFResult = GLTF & {
  nodes: {
    baked: THREE.Mesh;
    poleLightA: THREE.Mesh;
    poleLightB: THREE.Mesh;
    portalLight: THREE.Mesh;
  };
};

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new Color("#000000"),
    uColorEnd: new Color("#ffffff"),
  },
  portalVertexShader,
  portalFragmentShader
);

extend({ PortalMaterial });

export function PortalScene() {
  const portalMaterial = useRef<ShaderMaterial>();

  const { nodes } = useGLTF("/model/portal.glb") as GLTFResult;
  const texture = useTexture("/model/baked.jpg");

  useFrame((_, delta) => {
    portalMaterial.current.uTime += delta;
  });

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
        <portalMaterial ref={portalMaterial} />
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
