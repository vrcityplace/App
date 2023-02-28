
import React from "react";
import { Link } from "react-router-dom";
import './style.css';
export default function Principal() {
  return (

<div className="control">
  <div class="container-fluid justify-content-center p-2 mb-4">
   <h1 class="col-12 text-white bg-danger font-weight-bold">PWAs Control</h1>
   <div class="col-12 md-12 lg-12 xl-12 mt-5 p-2 mr-2 rounded"> 

   
     
     <Link to="/Videos">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      Videos
     </button> 
     </Link> 
     <Link to="/Images">
      <button type="button" class="btn btn-danger btn-lg btn-block">
        Images
     </button> 
     </Link> 

     <Link to="/Publicidad">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      Publicidad
     </button> 
     </Link> 
     <Link to="/Tv01">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      TV01
     </button> 
     </Link> 
      <Link to="/Tv02">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      TV02
     </button> 
     </Link>  <Link to="/Tv03">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      TV03
     </button> 
     </Link>  <Link to="/Tv04">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      TV04
     </button> 
     </Link>  <Link to="/Tv05">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      TV05
     </button> 
     </Link>  <Link to="/Tv06">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      TV06
     </button> 
     </Link>  <Link to="/Tv07">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      TV07
     </button> 
     </Link>  <Link to="/Tv08">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      TV08
     </button> 
     </Link>  <Link to="/Tv09">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      TV09
     </button> 
     </Link>  <Link to="/Tv10">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      TV10
     </button> 
     </Link>  <Link to="/Tv11">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      TV11
     </button> 
     </Link>  <Link to="/Tv12">
      <button type="button" class="btn btn-danger btn-lg btn-block">
      TV12
     </button> 
     </Link>

    </div>
    </div>
    </div>
    
  );
}

