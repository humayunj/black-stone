import React from "react";

import styles from "./TopNav.module.css";

export default function TopNav({setAbout}) {
  return (
    <div class={styles.nav}>
      <div className={`${styles.item} ${styles.brand}`}>black stone</div>
      <div className={`${styles.item} ${styles.about}`} onClick={() =>setAbout({
           'display':'block',
           'maxHeight':'100vh',
           'height':'100vh',
      })}>about.</div>
    </div>
  );
}
