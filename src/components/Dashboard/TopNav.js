import React from "react";

import styles from "./TopNav.module.css";

export default function TopNav(props) {
  return (
    <div class={styles.nav}>
      <div className={`${styles.item} ${styles.brand}`}>Black Stone</div>
      <div className={`${styles.item} ${styles.about}`}>About</div>
    </div>
  );
}
