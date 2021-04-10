import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useTransition, a } from 'react-spring';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../assets/img/cvs.svg";
import image3 from "../../assets/img/team.svg";
import * as THREE from 'three'

import IndexNavbar from "components/Navbars/IndexNavbar.js";


extend({ OrbitControls })

//Room------------------
const Room = () => {
  const [model, setModel] = useState();
  
  useEffect(() => {
    new GLTFLoader().load("./3D/scene.gltf", setModel)
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
        minPolarAngle={Math.PI / 3}
        args={[camera, gl.domElement]}
        ref={orbitRef}
      /> 
    )
}
//Plane----------------------------
/*
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
  
*/

/*
function Loading() {
  const [finished, set] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => set(true)
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200)
  }, [])

  const props = useTransition(finished, {
    from: { opacity: 1, width: 0 },
    leave: { opacity: 0 },
    update: { width },
  })

  return props.map(
    ({ item: finished, key, props: { opacity, width } }) =>
      !finished && (
        <a.div className="loading" key={key} style={{ opacity }}>
          <div className="loading-bar-container">
            <a.div className="loading-bar" style={{ width }} />
          </div>
        </a.div>
      ),
  )
}
*/


export default function EventView(){

    return (
        <>
          <IndexNavbar fixed />
          <section className="header relative  items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className=" titlelightmode text-HR-title font-semibold text-4xl">
                Event Display in 3D
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                People are the driving force behind the success of the
                enterprise. An efficient, user-centered experience for choosing
                one’s employees is crucial.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute  right-0 sm:w-6/12 ">
          
            
            <Canvas 
            camera={{ position: [0, 0, 150] }}
            onCreated={({ gl }) => {
              gl.shadowMap.enabled= true
              gl.shadowMap.type = THREE.PCFShadowMap
            }}           
          >
              <ambientLight />
              <spotLight position={[0,5,10]} penumbra={1} castShadow/>
              {/* <fog attach="fog" args={["white",5,15]} /> */}
              <Controls/>
              
              <Room/>
              {/*
              <Box/>
              <Plane/>
              */}  
               
          </Canvas>
          {/* <Loading/> */}
            
         
        </div>
      </section>
          
          
          
        </>
      );
}



    
  /*Rotatio Automatique 
  useFrame(() => {
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
    //meshRef.current.rotation.y += 0.01
  })
  */

