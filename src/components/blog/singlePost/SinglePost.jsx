"use client";

import React, { useState } from "react";
import styles from "./singlePost.module.css";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Comments from "../comments/Comments";
import Sidebar from "../../../components/blog/sidebar/Sidebar";

const SinglePost = ({ data }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleUpdate = async () => {
    try {
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      window.location.replace("/blog");
    } catch (err) {}
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.singlePost}>
          <div className={styles.singlePostWrapper}>
            <img
              src={data.image}
              alt={data.title}
              className={styles.singlePostImg}
            />
            {updateMode ? (
              <input
                type="text"
                value={title}
                className={styles.singlePostTitleInput}
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <div className={styles.singlePostTitleContainer}>
                <h1 className={styles.singlePostTitle}>
                  {data.title}
                  {
                    <div className={styles.singlePostEdit}>
                      <span
                        className={styles.singlePostIcon}
                        onClick={() => setUpdateMode(true)}
                      >
                        <EditIcon />
                      </span>
                      <span
                        className={styles.singlePostIcon}
                        onClick={handleDelete}
                      >
                        <DeleteIcon />
                      </span>
                    </div>
                  }
                </h1>
              </div>
            )}
            <div className={styles.singlePostInfo}>
              <span className={styles.singlePostAuthor}>
                Author:
                <Link href="/#" className="link">
                  <b> Éric Colday</b>
                </Link>
              </span>
              <span className={styles.singlePostDate}>
                {" "}
                {new Date(data.createdAt).toLocaleDateString("fr-FR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
              </span>
            </div>
            {updateMode ? (
              <textarea
                className={styles.singlePostDescInput}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            ) : (
              <p className={styles.singlePostDesc}>{data.content} </p>
            )}
            <button className={styles.singlePostButton} onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
        <Sidebar/> 
      </div>
      <Comments />
    </div>
  );
};

export default SinglePost;
