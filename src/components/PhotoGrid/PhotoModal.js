import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import S from "./PhotoModal.module.css";

function Placeholder() {
  let [reset, setReset] = useState(false);
  let blockProps = useSpring({
    from: {
      opacity: 0.5,
    },
    to: { opacity: 1 },
    onRest: () => setReset((state) => !state),
    reset: reset,
    reverse: reset,
  });
  return <animated.div style={blockProps} className={S.placeholder} />;
}

export default function PhotoModal({ photoList, startIndex,hideModal }) {
  let [index, setIndex] = useState(startIndex);

  const [loading, setLoading] = useState(true);

  const prevPhoto = () => {
    setLoading(true);
    setIndex((i) => (i - 1 < 0 ? photoList.length - 1 : i - 1));
  };  
  const nextPhoto = () => {
    setLoading(true);
    setIndex((i) => (i + 1 >= photoList.length ? 0 : i + 1));
  };
  const loaded = () => {
    setLoading(false);
  };

  let blockProps = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,

    config: {
      duration: 1000,
    },
    // onRest: () => setReset((state) => !state),
    reset: true,
    reverse: loading,
  });

  let mainProps = useSpring({
    opacity:1,from:{opacity:0}
  })

  console.log("RENDER");
  return (
    <animated.div style={mainProps} className={S.modal} >
      <div className={`${S.icon} ${S.previous}`} onClick={prevPhoto}>
        ❮
      </div>

      <animated.div style={blockProps}>
        <img
          className={`${S.image} ${loading ? S.loading : ""} `}
          onLoad={loaded}
          src={`${photoList[index].imageMain.url}`}
        />
      </animated.div>
      {loading && <Placeholder />}

      <div className={`${S.icon} ${S.next}`} onClick={nextPhoto}>
        ❯
      </div>
      <div className={`${S.icon} ${S.cross}`} onClick={hideModal}>
      ✖
      </div>
    </animated.div>
  );
}
