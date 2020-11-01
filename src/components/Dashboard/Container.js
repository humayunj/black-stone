import React from "react";
import TopNav from "./TopNav";
import PhotoGrid from "../PhotoGrid/Grid";

export default function DashboardContainer(props) {
  return (
    <div styles="1000px">
      <TopNav/>
      <PhotoGrid/>
    </div>
  );
} 
