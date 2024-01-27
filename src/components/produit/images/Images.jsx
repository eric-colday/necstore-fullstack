"use client";

import React, { useState } from "react";
import styles from "./images.module.css";

const Images = ({ data }) => {
  const [image, setImage] = useState(data.image[0]);

  const changeImage = (e) => {
    setImage(e.target.src);
  };
  return (
    <div className={styles.itemImgContainer}>
      <img src={image} alt="" className={styles.itemImg} />
      <div className={styles.itemImgContainerSmall}>
        <img
          src={data.image[0]}
          alt=""
          className={styles.itemImgSmall}
          onMouseOver={changeImage}
        />
        <img
          src={data.image[1]}
          alt=""
          className={styles.itemImgSmall}
          onMouseOver={changeImage}
        />
        <img
          src={data.image[2]}
          alt=""
          className={styles.itemImgSmall}
          onMouseOver={changeImage}
        />
      </div>
    </div>
  );
};

export default Images;
