import React, { useState } from "react";
import PhotoGrid from "../PhotoGrid/Grid";
import TopNav from "./TopNav";

export default function DashboardContainer(props) {
  const [defClass,setdefClass] = useState({
    'display':'none',
    'maxHeight':'0vh',
  })
    
  return (
    <div styles="1000px">
      <TopNav setAbout={setdefClass}/>
      <div>
          <PhotoGrid/>
      </div>
      <div style = {{display:defClass.display,
      zIndex:2,
      position:"fixed",
      top:'0',
      left:'0',
      backgroundColor:"black",
      width:'100vw',height:defClass.height,
      maxHeight:defClass.maxHeight}}>
        {console.log("about")}
        <h1>usanins</h1>
      </div>
    </div>
  );
} 
