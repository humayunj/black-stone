import React from "react";

import styles from "./TopNav.module.css";

export default function TopNav(props) {
  return (
    <div className={styles.nav}>
      <div className={`${styles.item} ${styles.brand}`}>black stone</div>
      <div className={`${styles.item} ${styles.about}`}>about.</div>
    </div>
  );
}
