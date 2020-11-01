import React, { useState } from "react";
import PhotoGrid from "../PhotoGrid/Grid";
import TopNav from "./TopNav";
import About from './About'
import './About.css'

export default function DashboardContainer(props) {
  const [defClass,setdefClass] = useState({
    'display':'none',
    'maxHeight':'0vh',
    'photo':'block',
  })
    
  return (
    <div>
      <TopNav setAbout={setdefClass}/>
      <div style={{display:defClass.photo}}>
          <PhotoGrid/>
      </div>
      <div className="about_container" style = {{display:defClass.display,height:defClass.height,maxHeight:defClass.maxHeight }}>
        <About></About>
      </div>
    </div>
  );
} 



