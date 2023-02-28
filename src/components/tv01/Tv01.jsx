
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";


export default function Tv01() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div >
      <div>
        <video
          style={{ maxWidth: "100%", width: "1000px", margin: "0 auto"}}
          playsInline
          loop
          
          controls
          alt="All the devices"
          // src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
          // src="https://res.cloudinary.com/dsbemomaf/video/upload/v1676334365/nonvwa9spui6owdjxzpr.mp4"
          src="https://res.cloudinary.com/dsbemomaf/video/upload/v1676334366/k9f8v7eqsdahftb2e2pv.mp4"
          
          ref={videoEl}

          
        />

   {/* <div> <iframe width="300"  height="300" src="https://www.youtube.com/embed/cPcLEGKR6ZI" title="TOP 5  ACCESORIOS DE REALIDAD VIRTUAL | TGN" frameborder="0" allow="accelerometer; clipboard-write;   encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="100%" ></iframe></div> */}
      </div>
      <Link to="/">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      Regresar
     </button> 
     </Link>
    </div>
  );  
}











