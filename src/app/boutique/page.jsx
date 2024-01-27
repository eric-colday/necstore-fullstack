import ProductCategory from "../../components/boutique/productCategory/ProductCategory";
import ProductList from "../../components/boutique/productList/ProductList";
import React from "react";
import styles from "./boutique.module.css";

export const metadata = {
  title: "Boutique - NecStore",
  description:
    "Découvrez la sélection exceptionnelle de produits chez NecStore. Des articles de qualité pour tous les passionnés. Explorez notre boutique dès maintenant.",
};

const Boutique = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;


  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.h2}>
            BOUTIQUE
            {cat ? ` - ${decodeURIComponent(cat)}` : ""}
          </h1>
          <p className={styles.desc}>
            Plongez dans un univers captivant où passion et expertise se
            rejoignent. Explorez nos produits, source d'inspiration, astuces et
            conseils pour une vie épanouie.
          </p>
        </div>
        <ProductCategory cat={cat} />
        <ProductList page={page} cat={cat} />
      </div>
    </div>
  );
};

export default Boutique;
