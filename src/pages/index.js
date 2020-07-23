// reference: https://codeworkshop.dev/blog/2020-04-03-adding-orbit-controls-to-react-three-fiber/

import Layout from "../components/layout"
import SEO from "../components/seo"
import React, { Suspense, useRef, useState } from "react"
import { Canvas, useFrame, useThree, extend } from "react-three-fiber"
import Model from "../components/Crerar"
import GLTF from "../static/models/crerar.glb"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });


const Box = props => {
  // This reference will give us direct access to the mesh so we can animate it
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />

    </mesh>
  )
}

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  // useFrame(() => {    group.current.rotation.y += 0.004;  });

  const {
    camera,
    gl: { domElement }
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(state => controls.current.update());
  
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      maxAzimuthAngle={Math.PI*2}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={0}
      minPolarAngle={0}
      autoRotate={true}
    />
  );
};

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <Canvas style={{height: 350,}}>
      <ambientLight intensity={1} />
      <CameraControls />

      <Suspense fallback={Box} >
        <Model url={GLTF}/>
      </Suspense>
      <pointLight
        intensity={2}
        position={[0, 0, 0]}
        color="#ffffff"
      />
    </Canvas>
    <div>
      taken outside the John Crerar Library at the University of Chicago (give it a twirl)
    </div>
  </Layout>
)

export default IndexPage
