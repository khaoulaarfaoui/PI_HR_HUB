import React, {useState, useEffect, useRef} from 'react';
import * as faceapi from 'face-api.js';
import './App.css';

const videoHeight = 450;
const videowidth  = 640;
const [initializing, setInitializing] = useState(false);
const videoRef = useRef(0);
const canvasRef = useRef();

useEffect(()=>{
    const MODEL_URL = process.env.PUBLIC_URL + '/models';
    setInitializing(true);
    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)

    ])
}, [])




return(
    <div className="App">
        <span>{initializing ? 'Initializing' : 'Ready'}</span>
        <video ref={videoRef} autoplay muted height ={videoHeight} width={videowidth}/>
        <canvas ref={canvasRef}/>
    </div>
);


export default FaceApi