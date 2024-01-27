"use client";

import { CategoriesPosts } from "../../../data";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./sidebar.module.css";

const getData = () => {
  const data = CategoriesPosts;

  if (data) {
    return data;
  }

  return notFound();
};

export default function Sidebar() {
  const data = getData();

  // const [cats, setCats] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/categories");
  //     setCats(res.data);
  //   };
  //   getCats();
  // }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>CATEGORIES</span>
        <div className={styles.grid}>
          {data.map((item) => (
            <Link key={item.id} href={`/blog?cat=${item.slug}`}>
              <div className={`${styles.card} ${styles[item.slug]}`}>
                <span>{item.title} </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
