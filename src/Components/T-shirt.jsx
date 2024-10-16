/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/models/T-shirt.glb -o src/Components/T-shirt.jsx -k -K -r public 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function TShirt({...props}) {
  const { nodes, materials } = useGLTF('/models/T-shirt.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <group name="Shirt_adid">
          <mesh name="Shirt_adid_1" geometry={nodes.Shirt_adid_1.geometry} material={materials._crayfishdiffuse} />
          <mesh name="Shirt_adid_1_1" geometry={nodes.Shirt_adid_1_1.geometry} material={materials['07___Default']} />
          <mesh name="Shirt_adid_1_2" geometry={nodes.Shirt_adid_1_2.geometry} material={materials['13___Default']} />
          <mesh name="Shirt_adid_1_3" geometry={nodes.Shirt_adid_1_3.geometry} material={materials['03___Default']} />
          <mesh name="Shirt_adid_1_4" geometry={nodes.Shirt_adid_1_4.geometry} material={materials['02___Default']} />
          <mesh name="Shirt_adid_1_5" geometry={nodes.Shirt_adid_1_5.geometry} material={materials['08___Default']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/T-shirt.glb')
