import React from "react";
import styles from "./postCategory.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoriesPosts } from "../../../data";

const getData = () => {
  const data = CategoriesPosts;

  if (data) {
    return data;
  }

  return notFound();
};

const PostCategory = () => {
  const data = getData();

  return (
    <div className={styles.container}>   
      <div className={styles.grid}> 
        {data.map((item) => (
          <Link key={item.id} href={`/blog?cat=${item.slug}`}> 
            <div className={`${styles.card} ${styles[item.slug]}`}>
              <span>{item.title}</span> 
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostCategory;
