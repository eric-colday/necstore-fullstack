import React from "react";
import styles from "./featured.module.css";
import Card from "./Card";
import { Products } from "../../../data.js";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXTAUTH_URL;

async function getData(page, cat) {
  const res = await fetch(
    `${BASE_URL}/api/products`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to load data."); 
  }

  return res.json();
}

// const getData = () => {
//   const data = Products;

//   if (data) {
//     return data;
//   }

//   return notFound();
// };

const Featured = async () => {
  const data = await getData();

  return (
    <div>
      <div className={styles.content}>
        <h2 className={styles.h2}>PRODUITS EN VEDETTE</h2>
        <p className={styles.desc}>
          Découvrez notre collection de t-shirts, jeans et vestes tendance pour
          tous les styles. Des incontournables pour votre garde-robe!
        </p>
      </div>
      <div className={styles.containerProducts}>
        <Card data={data}/>
      </div>
    </div>
  );
};

export default Featured;
