"use client";

import React, { useState } from "react";
import styles from "./inscription.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Inscription = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/connexion?success=Compte-cree-avec-succes");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Créer un compte</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="username"
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="password"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          S'inscrire
        </button>
        {error && "Erreur de connexion !"}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/connexion">
        Se connecter avec un compte existant
      </Link>
    </div>
  );
};

export default Inscription;
