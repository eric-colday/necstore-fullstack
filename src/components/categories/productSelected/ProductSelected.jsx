"use client";

import { Products } from "../../../data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../selectOption/selectOption.module.css";

const getData = (cat) => {
  const data = Products.filter((item) => item.catSlug === cat);

  if (data) {
    return data;
  }

  return notFound();
};

const ProductSelected = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = getData(cat)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [cat])

  useEffect(() => {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className={styles.cont}>
      <div className={styles.grid}>
        {filteredProducts.map((item) => (
          <Link href={`/produit/${item.slug}`} key={item.id}>
            <div className={styles.card}>
              <img
                src={item.image[0]}
                alt="blog1"
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.h3}>{item.title}</h3>
                <div>{item.price} € </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductSelected;
