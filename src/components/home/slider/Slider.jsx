"use client";

import React, { useState, useEffect } from "react";
import styles from "./slider.module.css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import Link from "next/link";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "/home/Male-Female-T-Shirts-Mockup.jpg",
    "/home/jeans.jpeg",
    "/home/shoes.jpeg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  //timer sliders
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" className={styles.img} />
        <img src={data[1]} alt="" className={styles.img} />
        <img src={data[2]} alt="" className={styles.img} />
      </div>
      <div className={styles.icons}>
        <div
          className={styles.icon}
          onClick={prevSlide}
          style={{
            border: "2px solid #0d2847",
          }}
        >
          <WestOutlinedIcon
            style={{
              color: "#0d2847",
            }}
          />
        </div>
        <div
          className={styles.icon}
          onClick={nextSlide}
          style={{
            border: "2px solid #0d2847",
          }}
        >
          <EastOutlinedIcon
            style={{
              color: "#0d2847",
            }}
          />
        </div>
      </div>
      <div className={styles.bannerContent}>
        <h1 className={styles.h1}>NecStore</h1>
        <p className={styles.p}>
          Une collection tendance de t-shirts, jeans et vestes pour un style
          unique. Exprimez-vous avec notre mode de qualité !
        </p>
        <Link href="/boutique">
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            Découvrir
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
