import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export  default function Model(props) {
  const { nodes, materials } = useGLTF('/book.gltf')
  const ref= useRef()
  useFrame((state)=>{
    const time=state.clock.getElapsedTime()
    ref.current.rotation.y+=0.0033
    ref.current.rotation.z=-(-0.2 - (4+Math.sin(time/1.4))/20)
    
  })
 

  return (
    <group {...props} ref={ref} dispose={null}>
      <group rotation={[-0.918, -0.112, 0.082]} scale={2.3}>
        <mesh geometry={nodes.Model_material0_0.geometry} material={materials.material0} />
        <mesh geometry={nodes.Model_material0_0_1.geometry} material={materials.material0} />
      </group>
    </group>
  )
}

useGLTF.preload('/book.gltf')
