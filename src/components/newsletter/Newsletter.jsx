import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./newsletter.module.css";
import Link from "next/link";

const Newsletter = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <div>S'INSCRIRE À LA NEWSLETTER :</div>
        <div>
          <input
            type="text"
            placeholder="Entre ton e-mail..." 
            className={styles.input}
          />
          <button className={styles.button}>REJOINS-NOUS </button>
        </div>
        <div className="styles.icons">
          <Link href="#">
            <FacebookIcon />
          </Link>
          <Link href="#">
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
