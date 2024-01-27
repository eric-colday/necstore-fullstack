"use client";

import React, { useContext } from "react";
import Link from "next/link";
import styles from "./recentsPosts.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

const CardPosts = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <Link href={`/posts/${item.slug}`} key={item._id}>
          <div
            className={styles.card}
            style={
              theme === "dark"
                ? { backgroundColor: "#0D2847" }
                : { backgroundColor: "#FBFDFF" }
            }
          >
            <img src={item.image} alt={item.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.h3}>
                {item.title.length > 10
                  ? `${item.title.slice(0, 28)}...`
                  : item.title}
              </h3>
              <p className={styles.p}>
                {item.description.length > 50
                  ? `${item.description.slice(0, 47)}...`
                  : item}
              </p>
              <button className={styles.button}>Lire plus...</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardPosts;
