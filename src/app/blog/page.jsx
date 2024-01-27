import PostCategory from "../../components/blog/postCategory/PostCategory";
import PostsList from "../../components/blog/postsList/PostsList";
import React from "react";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog - NecStore",
  description:
    "Plongez dans notre blog NecStore pour des articles captivants sur la tech, les tendances et astuces. Restez informé et inspiré avec nos contenus exclusifs.",
};

const Blog = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1; 
  const { cat } = searchParams;

  return (
    <div className={styles.container}> 
      <div className={styles.content}>
        <h1 className={styles.h2}>
          BLOG
          {cat ? ` - ${decodeURIComponent(cat)}` : ""} 
        </h1>
        <p className={styles.desc}>
          Explorez notre blog captivant, où l'expertise rencontre la passion.
          Découvrez des articles inspirants, astuces et conseils pour enrichir
          votre vie.
        </p>
      </div>
      <PostCategory cat={cat} /> 
      <PostsList page={page} cat={cat} />
    </div>
  );
};

export default Blog;
