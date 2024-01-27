import SelectOption from "../../components/categories/selectOption/SelectOption";
import React from "react";
import styles from "./categories.module.css";

const Categories = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.h2}>{cat}</h2>
        <p className={styles.desc}>
          Plongez dans un univers captivant où passion et expertise se
          rejoignent. Explorez nos produits, source d'inspiration, astuces et
          conseils pour une vie épanouie.
        </p>
      </div>
      <SelectOption page={page} cat={cat} />
    </div>
  );
};

export default Categories;
