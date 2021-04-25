import React, { useState } from "react";
import Input from "react-validation/build/input";
import { useDispatch, useSelector } from "react-redux";

import Webcam from "react-webcam";
import {  uploadFile } from "../../Redux/actions/hr/hr";
import {  AddtestResponse } from "../../Redux/actions/hrtest/hrtest";

const WebcamStreamCapture = () => {

  const [Photos, setPhotos] = useState("");
  const dispatch = useDispatch();

    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
  
    const handleStartCaptureClick = React.useCallback(() => {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);
  
    const handleDataAvailable = React.useCallback(
      ({ data }) => {
        if (data.size > 0) {
          setRecordedChunks((prev) => prev.concat(data));
        }
      },
      [setRecordedChunks]
    );

    
  
    const handleStopCaptureClick = React.useCallback(() => {
      mediaRecorderRef.current.stop();
      setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);
  
    const handleDownload = React.useCallback(() => {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "react-webcam-stream-capture.webm";
        a.click();
        window.URL.revokeObjectURL(url);
        setRecordedChunks([]);
      }
    }, [recordedChunks]);

    const [video, setVideo] = useState("");

    const onChangeVideo = (e) => {
      const file = e.target.files[0]; // accesing file
      console.log(file);
      setVideo(file);
    };
    const onChangePhotos = (e) => {
      const file = e.target.files[0]; // accesing file
      setPhotos(file);
    };
  
    const clickEnvoyer = (e) => {
      e.preventDefault();

      dispatch(uploadFile(Photos))
      .then(() => {})
      .catch(() => {
        //setSuccessful(false);
      });
       
      console.log("user ",JSON.parse(localStorage.getItem("user")).id)

      dispatch(AddtestResponse(Photos.name,JSON.parse(localStorage.getItem("user")).id,localStorage.getItem("idTestc")))
      .then(() => {})
      .catch(() => {
        //setSuccessful(false);
      });



      
    }

    return (
      <>
        <Webcam audio={false} ref={webcamRef} />
        {capturing ? (
          <button onClick={handleStopCaptureClick}>Stop Capture</button>
        ) : (
          <button onClick={handleStartCaptureClick}>Start Capture</button>
        )}
        {recordedChunks.length > 0 && (
          <button onClick={handleDownload}> Download </button>
        )}
       

        <button onClick={clickEnvoyer}>Envoyer  </button>
         <input type="file" onChange={onChangePhotos}
         
         ></input>
      </>
    );
  };
  

  export default WebcamStreamCapture
  
  // https://www.npmjs.com/package/react-webcam

  