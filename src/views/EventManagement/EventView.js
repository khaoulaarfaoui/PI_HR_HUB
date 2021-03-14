import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'
// Styles
import "./Event.scss";
// React Spring
import { useSpring, a } from "react-spring/three";

import IndexNavbar from "components/Navbars/IndexNavbar.js";

extend({ OrbitControls })

//Room------------------
const Room = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load("/scene.gltf", setModel)
  }, []);
  
  return model ? <primitive object ={model.scene} /> : null
}

//Contols---------------------------
const Controls = () => {
  const { camera, gl} = useThree();
  const orbitRef = useRef();

  useFrame(() => {
    orbitRef.current.update()
  })

  return(
      <orbitControls 
        autoRotate 
        maxPolarAngle={Math.PI / 3}
        //minPolarAngle={Math.PI / 3}
        args={[camera, gl.domElement]}
        ref={orbitRef}
      /> 
    )
}
//Plane----------------------------

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-0.5,0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100,100]} />
      <meshPhysicalMaterial attach="material" color="white" />
  </mesh>
)

//Box------------------------------

const Box = () => {
  //const meshRef = useRef();
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const props = useSpring({
    scale: active? [1.5,1.5,1.5] : [1,1,1],
    color: hovered ? "blue" : "grey",
  })

  return(
            <a.mesh 
                //ref={meshRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={() => setActive(!active)}
                scale={props.scale }
                castShadow
                >
                <ambientLight />
                <spotLight position={[0,5,10]} penumbra={1} castShadow/>
                <boxBufferGeometry attach="geometry" args={[1,1,1]} />
                <a.meshPhysicalMaterial attach="material" color={props.color} />
              </a.mesh>
    )
  }
  



export default function EventView(){

    return (
        <>
          <IndexNavbar fixed />
          <Canvas 
            camera={{ position: [0, 0, 5] }}
            onCreated={({ gl }) => {
              gl.shadowMap.enabled= true
              gl.shadowMap.type = THREE.PCFShadowMap
            }}           
          >
              <ambientLight />
              <spotLight position={[0,5,10]} penumbra={1} castShadow/>
              <fog attach="fog" args={["white",5,15]} />
              <Controls/>
              <Box/>
              <Plane/>
              {/*<Room/>*/}
          </Canvas>
          
        </>
      );
}



    
  /*Rotatio Automatique 
  useFrame(() => {
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
    //meshRef.current.rotation.y += 0.01
  })
  */

