import React,{useState} from "react";

import styles from "./Photo.module.css";



export default function Photo(props) {
  let [pos,setPos] = useState(false);
  // console.log(styles);
  return (
    <div className = {styles.photo} onClick={()=>setPos(true)}>
        <img className = {`${styles.img} ${ pos? styles.full : ''}`} src={props.photoSrc} />
    </div>
  )
}
