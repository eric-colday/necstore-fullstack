"use client";

import React, { useState } from "react";
import styles from "./singlePost.module.css";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Comments from "../comments/Comments";
import Sidebar from "../../../components/blog/sidebar/Sidebar";

const SinglePost = ({ data }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.singlePost}>
          <div className={styles.singlePostWrapper}>
            <img
              src={data?.img}
              alt={data?.title}
              className={styles.singlePostImg}
            />
            <div className={styles.singlePostTitleContainer}>
              <h1 className={styles.singlePostTitle}>{data?.title}</h1>
            </div>
            <div className={styles.singlePostInfo}>
              <span className={styles.singlePostAuthor}>
                Auteur :{data.fullname}
              </span>
              <span className={styles.singlePostDate}>
                {" "}
                {new Date(data?.createdAt).toLocaleDateString("fr-FR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
              </span>
            </div>
            <p
              className={styles.singlePostDesc}
              dangerouslySetInnerHTML={{ __html: data?.content }}
            />
          </div>
        </div>
        <Sidebar />
      </div>
      <Comments />
    </div>
  );
};

export default SinglePost;
