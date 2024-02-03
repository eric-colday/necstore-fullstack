import { CategoriesProducts } from "../../../data";
import Link from "next/link";
import React from "react";
import styles from "./productCategory.module.css";

const BASE_URL = process.env.NEXTAUTH_URL;

async function getData() {
  const res = await fetch(`${BASE_URL}/api/categories-products`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to load data.");
  }

  return res.json();
}


const ProductCategory = async () => {
  const data = await getData();

  return (
    <div className={styles.container}> 
      <div className={styles.grid}>
        {data.map((item) => (
          <Link key={item._id} href={`/boutique?cat=${item.slug}`}> 
            <div className={`${styles.card} ${styles[item.slug]}`}>
              <span>{item.title}</span> 
            </div> 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
