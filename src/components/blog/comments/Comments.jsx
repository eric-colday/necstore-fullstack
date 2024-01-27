"use client";

import Image from "next/image";
import React, { useContext } from "react";
import styles from "./comments.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

const Comments = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/moon.png"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Tobby</span>
              <span className={styles.date}>21 mai 2023</span>
            </div>
          </div>
          <div
            className={styles.commentText}
            style={
              theme === "dark"
                ? { backgroundColor: "#0D2847" }
                : { backgroundColor: "#E6F4FE" }
            }
          >
            <p className={styles.desc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores repellendus illum aliquid consectetur deserunt enim
              nemo sequi error minus odio, molestiae expedita maxime corporis
              perferendis, corrupti ab assumenda maiores dolor!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
