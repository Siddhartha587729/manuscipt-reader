/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 .\\ancientbook.gltf 
Author: Andy Woodhead (https://sketchfab.com/Andywoodhead)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chained-medieval-library-book-8e4a74f2cb4c4101bb0cd843445ef23e
Title: Chained (medieval) library book
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/ancientbook.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={1.7}>
        <mesh geometry={nodes.Base_Base_0.geometry} material={materials.Base} />
        <mesh geometry={nodes.Metal_dec_Metal_dec_0.geometry} material={materials.Metal_dec} />
        <mesh geometry={nodes.Metal_dec_Metal_dec_0_1.geometry} material={materials.Metal_dec} />
        <mesh geometry={nodes.Metal_dec_Metal_dec_0_2.geometry} material={materials.Metal_dec} />
        <mesh geometry={nodes.Metal_dec_Metal_dec_0_3.geometry} material={materials.Metal_dec} />
        <mesh geometry={nodes.Book_dec_Book_dec_0.geometry} material={materials.Book_dec} />
        <mesh geometry={nodes.Book_dec_Book_dec_0_1.geometry} material={materials.Book_dec} />
        <mesh geometry={nodes.Book_dec_Book_dec_0_2.geometry} material={materials.Book_dec} />
        <mesh geometry={nodes.Book_dec_Book_dec_0_3.geometry} material={materials.Book_dec} />
        <mesh geometry={nodes.Book_dec_Book_dec_0_4.geometry} material={materials.Book_dec} />
        <mesh geometry={nodes.Book_dec_Book_dec_0_5.geometry} material={materials.Book_dec} />
        <mesh geometry={nodes.Book_dec_Book_dec_0_6.geometry} material={materials.Book_dec} />
      </group>
    </group>
  )
}

useGLTF.preload('/ancientbook.gltf')
