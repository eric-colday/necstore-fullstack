"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./banner.module.css";

const Banner = () => {
  let difference = +new Date(`12/31/2024`) - +new Date();
  const [delay, setDelay] = useState(difference);

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className={styles.banner}>
      <div className={styles.bannerImg}>
        <div className={styles.bannerText}>
          <h2 className={styles.bannerTitle}>Solde</h2>
          <p className={styles.bannerDescription}>
            Jusqu'à 50% de réduction sur les articles sélectionnés
          </p>
          <div className={styles.cardTimer}>
            {d}:{h}:{m}:{s}
          </div>
          <Link href="/boutique">
            <button className={styles.bannerButton}>Acheter maintenant</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
