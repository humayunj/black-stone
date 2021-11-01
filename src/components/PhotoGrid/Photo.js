import React, { useState, useRef } from "react";

import styles from "./Photo.module.css";

import { useSpring, animated } from "react-spring";

function Placeholder(props) {
  const [reset, setReset] = useState(false);

  let blockProps = useSpring({
    from: {
      opacity: .4,
    },
    to: { opacity: 1 },
    onRest: () => setReset((state) => !state),
    reset: reset,
    reverse: reset,
  });

  return (
    <animated.div style={blockProps} className={styles.placeholder}></animated.div>
  );
}

export default function Photo(props) {
  let [pos, setPos] = useState(false);
  let [loading, setLoading] = useState(true);
  // console.log(styles);
  let imgEl = useRef(null);
  return (
    <div className={styles.photo} onClick={() => setPos(true)}>
      {props.photoSrc != "" ? (
        <img
          style={
            loading
              ? {
                  // background:'#eee',
                  opacity: 0,
                }
              : { opacity: 1 }
          }
          ref={imgEl}
          className={`${styles.img} `}
          src={`${props.photoSrc}`}
          onLoad={() => setLoading(false)}
          onClick={props.showModal}
        />
      ) : (
        <Placeholder />
      )}
    </div>
  );
}
