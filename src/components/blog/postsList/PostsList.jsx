import React from "react";
import styles from "./postsList.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Posts } from "../../../data";
import Pagination from "../../pagination/Pagination";

const BASE_URL = process.env.NEXTAUTH_URL;

async function getData(page, cat) {
  const res = await fetch(
    `${BASE_URL}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to load data.");
  }
  return res.json();
}

const PostsList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 6;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {posts?.map((item) => (
          <Link href={`/posts/${item.slug}`} key={item._id}>
            <div className={styles.card}>
              <img src={item.img} alt="blog1" className={styles.cardImage} />

              <div className={styles.cardContent}>
                <div className={styles.date}>
                  <span>{item.createdAt.substring(0, 10)} - </span>
                  <span className={styles.category}> {item.catSlug}</span>
                </div>
                <h2 className={styles.h3}>
                  {item.title.length > 10
                    ? `${item.title.slice(0, 28)}...`
                    : item.title}
                </h2>
                <div className={styles.button}>Lire Plus ...</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default PostsList;
