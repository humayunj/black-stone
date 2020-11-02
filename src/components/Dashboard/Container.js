import React, { useState } from "react";
import PhotoGrid from "../PhotoGrid/Grid";
import TopNav from "./TopNav";
import About from "./About";
import "./About.css";
import  PhotoModal  from "../PhotoGrid/PhotoModal";

export default function DashboardContainer(props) {
  const [about, toggleAbout] = useState(false);

  return (
    <div>
      <TopNav expanded={about} setAbout={() => toggleAbout(s =>!s)} />
      <div>
        <PhotoGrid />
      </div>
      <About expanded={about} />
      
    </div>
  );
}
