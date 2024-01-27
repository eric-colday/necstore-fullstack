import React, { useContext } from "react";
import styles from "./recentsPosts.module.css";
import { notFound } from "next/navigation";
import { Posts } from "../../../data.js";
import Card from "./CardPosts";
import Link from "next/link";

// async function getData(page, cat) {
//   const res = await fetch(`http://localhost:3000/api/posts`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to load data.");
//   }

//   return res.json();
// }

const getData = () => {
  const data = Posts;

  if (data) {
    return data;
  }

  return notFound();
};

const RecentsPosts = async () => {
  // const data = await getData();
  const data = getData();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.h2}>NOTRE BLOG</h2>
        <p className={styles.desc}>
          Explorez notre blog captivant, où l'expertise rencontre la passion.
          Découvrez des articles inspirants, astuces et conseils pour enrichir
          votre vie.
        </p>
      </div>
      <div className={styles.containerPosts}>
        <Card data={data} />
      </div>
      <Link href="/blog">
        <button className={styles.buttonBlog}>Voir plus</button>
      </Link>
    </div>
  );
};

export default RecentsPosts;
