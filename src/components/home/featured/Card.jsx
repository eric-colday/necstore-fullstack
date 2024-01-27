"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./featured.module.css";
import Link from "next/link";

const Card = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.grid}>
      {data.slice(0, 4).map((item) => (
        <Link href={`/produit/${item.slug}`} key={item._id}>
          <div
            className={styles.card}
            style={
              theme === "dark"
                ? { backgroundColor: "#0D2847" }
                : { backgroundColor: "#FBFDFF" }
            }
          >
            <img
              src={item.image[0]}
              alt="featured1"
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.h3}>
                {item.title.length > 25
                  ? `${item.title.slice(0, 25)}...`
                  : item.title}
              </h3>
              <p className={styles.p}>
                {item.description.length > 50
                  ? `${item.description.slice(0, 50)}...`
                  : item.description}
              </p>
              <p className={styles.p}>{item.price}€</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
