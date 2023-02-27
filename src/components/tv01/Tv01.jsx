import React from "react";

const About = () => (
  <h1>This is a PWA</h1>
);

export default About;








// import './App.css';
// import ReactPlayer from 'react-player';
// import video from './assets/videos/TheGoodDoctor.mp4';
// function App() {
//   return (
//     <div className="contenedor">
//       <ReactPlayer
//       url={video}
//       width='100%'
//       height='100%'
//       play
//       loop
      
//       className="react-player"
//       />
//     </div>
//   );
// }
// export default App;



// import React, { useEffect, useRef } from "react";


// export default function Tv01() {
//   const videoEl = useRef(null);

//   const attemptPlay = () => {
//     videoEl &&
//       videoEl.current &&
//       videoEl.current.play().catch(error => {
//         console.error("Error attempting to play", error);
//       });
//   };

//   useEffect(() => {
//     attemptPlay();
//   }, []);

//   return (
//     <div >
//       <h1>Autoplay example</h1>
//       <div>
//         <video
//           style={{ maxWidth: "100%", width: "900px", margin: "0 auto"}}
//           playsInline
//           loop
          
//           controls
//           alt="All the devices"
//           // src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
//           // src="https://res.cloudinary.com/dsbemomaf/video/upload/v1676334365/nonvwa9spui6owdjxzpr.mp4"
//           src="https://res.cloudinary.com/dsbemomaf/video/upload/v1676334366/k9f8v7eqsdahftb2e2pv.mp4"
          
//           ref={videoEl}

          
//         />

//    <div> <iframe width="300" height="300" src="https://www.youtube.com/embed/cPcLEGKR6ZI" title="TOP 5  ACCESORIOS DE REALIDAD VIRTUAL | TGN" frameborder="0" allow="accelerometer; clipboard-write;   encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="100%" ></iframe></div>
//       </div>
//     </div>
//   );  
// }






















// import React from "react";
// import {useState} from 'react'
// //import axios from "axios";
// import {useDispatch} from 'react-redux'
// import { } from "../../C_actions";


// export default function SearchBar(){
// const [search, setSearch] = useState ('')
// let dispatch = useDispatch()
 
// function onSubmit(e){
//     e.preventDefault();
// dispatch((search))
// }

// function onInputChange(e){
//     e.preventDefault();
//     setSearch(e.target.value)
    
// }
//     return <>
//         <form onSubmit={onSubmit}>
//         <input type="text" onChange={onInputChange} value={search}/>
//         <input type="submit" value="Buscar" />
//         </form>
//     </>
// }