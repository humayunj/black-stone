import React, { useState, useRef } from "react";

import styles from "./Photo.module.css";

export default function Photo(props) {
  let [pos, setPos] = useState(false);
  let [loading, setLoading] = useState(true);
  // console.log(styles);
  let imgEl = useRef(null);
  return (
    <div className={styles.photo} onClick={() => setPos(true)}>
      {props.photoSrc !='' ? (
        <img
          style={ loading?  {
            // background:'#eee',
            opacity:0,
          }: {opacity:1}}
          ref={imgEl}
          className={`${styles.img} `}
          src={`${props.photoSrc}?w=150`}
          onLoad={() => setLoading(false)}
        />
      ) : ( 
        <div className={styles.placeholder}></div>
      )}
    </div>
  );
}
