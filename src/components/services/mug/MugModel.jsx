import { useGLTF } from '@react-three/drei'

export function MugModel(props) {
  const { nodes, materials } = useGLTF('/data.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Mat_2} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Mat_1} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/data.glb')
