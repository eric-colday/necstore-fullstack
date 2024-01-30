import { CategoriesProducts } from "../../../data";
import Link from "next/link";
import React from "react";
import styles from "./productCategory.module.css";

async function getData() {
  const res = await fetch(`${BASE_URL}/api/catprod`,
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
//   const data = CategoriesProducts;

//   if (data) {
//     return data;
//   }

//   return notFound(); 
// };

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
