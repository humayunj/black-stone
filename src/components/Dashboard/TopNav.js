import React from "react";

import styles from "./TopNav.module.css";

export default function TopNav({setAbout}) {
  return (
    <div className={styles.nav}>
      <div className={`${styles.item} ${styles.brand}`} onClick={() =>setAbout({
           'display':'none',
           'maxHeight':'0vh',
           'height':'0vh',
           'photo':'block',
      })

      }>black stone</div>
      <div className={`${styles.item} ${styles.about}`} onClick={() =>setAbout({
           'display':'block',
           'maxHeight':'100vh',
           'height':'100vh',
           'photo':'none',
      })}>about.</div>
    </div>
  );
}
