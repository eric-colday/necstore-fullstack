import Link from "next/link";
import React from "react";
import styles from "./featuredCategory.module.css";

const featuredCategory = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <h2 className={styles.h2}>CATÉGORIES</h2>
        <p className={styles.desc}>
          Découvrez nos t-shirts, jeans, chaussures et vestes tendance pour un
          look impeccable, quelle que soit l'occasion.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <div className={styles.featuredOne}>
            <Link href="/categories?cat=jeans">
              <div id="img1" className={styles.lilOverlay}></div>
              <img
                src="/home/jean-flarebootcut.webp"
                alt="img1"
                className={styles.img}
              />
              <p className={styles.mainDescription}>Jeans</p>
            </Link>
          </div>
          <div className={styles.featuredTwo}>
            <Link href="/categories?cat=t-shirts">
              <div id="img2" className={styles.lilOverlay}></div>
              <img
                src="/home/t-shirt-en-coton.webp"
                alt="img2"
                className={styles.img}
              />
              <p className={styles.mainDescription}>T-shirt</p>
            </Link>
          </div>
          <div className={styles.featuredFour}>
            <Link href="/categories?cat=vestes">
              <div id="img3" className={styles.lilOverlay}></div>
              <img
                src="/home/veste-blazer.webp"
                alt="img3"
                className={styles.img}
              />
              <p className={styles.mainDescription}>Vestes</p>
            </Link>
          </div>
          <div className={styles.featuredLow}>
            <Link href="/categories?cat=chaussures">
              <div id="img4" className={styles.lilOverlay}></div>
              <img
                src="/home/tennis-lacets.webp"
                alt="img4"
                className={styles.img}
              />
              <p className={styles.mainDescription}>Chaussures</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featuredCategory;
