import { useGLTF } from '@react-three/drei'

export function ConsoleModel(props) {
  const { nodes, materials } = useGLTF('/trophy.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.001']} />
    </group>
  )
}

useGLTF.preload('/trophy.glb')