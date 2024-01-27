import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link href="/">
        <span className={styles.logo}>NecStore</span>
      </Link>
      <span className={styles.copyright}>
        © Copyright 2023. All Rights Reserved
      </span>
    </div>
  );
};

export default Footer;
