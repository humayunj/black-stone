import React from "react";
import styles from "./Grid.module.css";
import Photo from "./Photo";

export default function PhotoGrid(props) {
  return (
    <div className={styles.grid}>
      <Photo photoSrc = "/images/a.jpg" />
      <Photo photoSrc = "/images/b.jpg" />
      <Photo photoSrc = "/images/c.jpg" />
      <Photo photoSrc = "/images/d.jpg" />
      <Photo photoSrc = "/images/e.jpg" />
      <Photo photoSrc = "/images/f.jpg" />
      <Photo photoSrc = "/images/g.jpg" />
      <Photo photoSrc = "/images/h.jpg" />
      <Photo photoSrc = "/images/i.jpg" />
      <Photo photoSrc = "/images/j.jpg" />
      
      
      
    
      
      
    </div>
  );
}