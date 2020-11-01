import React from "react";

import styles from "./Photo.module.css";



export default function Photo(props) {
  return (
    <div className = {styles.photo}>
        <img className = {styles.img } src={props.photoSrc} />
    </div>
  )
}
