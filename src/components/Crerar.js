
// import * as THREE from 'three'
// import React, { useRef } from 'react'
// import { useLoader } from 'react-three-fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import model from '../static/models/crerar.glb'

// export default function Model(props) {
//   const group = useRef()
//   const { nodes, materials } = useLoader(GLTFLoader, model)
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh material={nodes.mesh_0.material} geometry={nodes.mesh_0.geometry} />
//     </group>
//   )
// }

import React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Model({ url }) {
  const [scene, set] = React.useState()

  React.useMemo(
    () =>
      new GLTFLoader().load(url, gltf => {
        // gltf.scene.traverse(obj => {
        //   if (obj.type === "Mesh") {
        //     obj.material.dispose()
        //     obj.material = new THREE.MeshPhysicalMaterial({
        //       roughness: 0.4,
        //       clearCoat: 1,
        //       clearCoatRoughness: 0.3,
        //       color: obj.material.color,
        //     })
        //   }
        // })
        set(gltf.scene)
      }),
    [url]
  )

  return scene ? <primitive object={scene} /> : null
}

export default Model
