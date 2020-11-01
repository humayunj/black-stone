import React, { useState, useRef } from "react";

import styles from "./Photo.module.css";

export default function Photo(props) {
  let [pos, setPos] = useState(false);
  // console.log(styles);
  let imgEl = useRef(null);
  return (
    <div className={styles.photo} onClick={() => setPos(true)}>
      <img ref={imgEl} className={`${styles.img} `} src={props.photoSrc} />
    </div>
  );
}
