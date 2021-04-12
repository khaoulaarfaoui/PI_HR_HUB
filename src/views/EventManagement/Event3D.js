import React, { useState, useRef, useEffect, Fragment } from "react";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useTransition, useSpring , a } from 'react-spring';
import { connect } from "react-redux";  
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AllEvents, DeleteEvents } from "../../Redux/actions/event/EventAction";
import * as THREE from 'three'
import "../../assets/styles/Event3D.css"

import IndexNavbar from "components/Navbars/IndexNavbar.js";


extend({ OrbitControls })

//Rooms------------------
const Room = () => {
  const [model, setModel] = useState();
  
  useEffect(() => {
    new GLTFLoader().load("./Stand1/scene.gltf", setModel)
  }, []);
  
  return model ? <primitive object ={model.scene} /> : null
}

const Room2 = () => {
  const [model, setModel] = useState();
  
  useEffect(() => {
    new GLTFLoader().load("./Stand2/scene.gltf", setModel)
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



const EventView = (props) => {

  useEffect(() => {
    props.fetchAllEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
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
          <AliceCarousel>
            
            <Canvas 
              camera={{ position: [0, 0, 150] }}
              onCreated={({ gl }) => {
                gl.shadowMap.enabled= true
                gl.shadowMap.type = THREE.PCFShadowMap
              }}>
              <ambientLight />
              <spotLight position={[0,5,10]} penumbra={1} castShadow/>
             
              <Controls/>              
              <Room/>               
            </Canvas>

          <Canvas 
            camera={{ position: [0, 0, 300] }}
            onCreated={({ gl }) => {
              gl.shadowMap.enabled= true
              gl.shadowMap.type = THREE.PCFShadowMap
            }}>
              <ambientLight />
              <spotLight position={[0,5,10]} penumbra={1} castShadow/>
              
              <Controls/>
              <Room2/>      
          </Canvas>
         
           
          </AliceCarousel>
        </div>
      </section>


 {props.EventsList.map((event, index) => {
          return (     
      <section className="  pb-16 bg-gray-300 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className=" container mx-auto">
        
          <Fragment key={index}>
          <div className=" bannerdarkmode flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
               
              </p>
              <h3 className="font-semibold text-3xl">
                {event.eventName}{" "}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                {event.eventDate}{" "}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                {event.description}{" "}
              </p>
              
              <div className="text-center mt-16"></div>
            </div>
          </div>
          </Fragment>
           
        </div>
      </section>
           );
         })}
          
          
        </>
      );
}


const mapStateToProps = (state) => ({
  EventsList: state.eventsReducer.list,
});

const mapActionToProps = {
  fetchAllEvents: AllEvents
};

export default connect(mapStateToProps, mapActionToProps)(EventView);



    
  /*Rotatio Automatique 
  useFrame(() => {
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
    //meshRef.current.rotation.y += 0.01
  })
  */

