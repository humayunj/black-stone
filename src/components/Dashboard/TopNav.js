import React from "react";

import styles from "./TopNav.module.css";

export default function TopNav({expanded, setAbout }) {
  return (
    <div className={`${styles.nav} `}>
      <div className={`${styles.item} ${styles.brand} ${expanded?styles.expanded:''}`} onClick={setAbout}>
        black stone
      </div>
      <div
        className={`${styles.item} ${styles.about} ${expanded?styles.expanded:''}`}
        onClick={() => setAbout()}
      >
        about.
      </div>
    </div>
  );
}
