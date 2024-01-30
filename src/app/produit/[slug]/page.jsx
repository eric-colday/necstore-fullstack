import Images from "../../../components/produit/images/Images";
import ProductInfos from "../../../components/produit/productInfos/ProductInfos";
import { Products } from "../../../data";
import React from "react";
import styles from "./produit.module.css";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXTAUTH_URL;

async function getData(slug) {
  const res = await fetch(`${BASE_URL}/api/products/` + slug, {
    cache: "no-store", 
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

// const getData = (slug) => {
//   const data = Products.find((item) => item.slug === slug);

//   if (data) {
//     return data;
//   }

//   return notFound();
// };

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await getData(slug);
  return {
    title: data.title,
    description: data.description,
  };
}

const Produit = async ({ params }) => {
  const data = await getData(params.slug);

  

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.title,
    image: data.image,
    description: data.description,
    brand: {
      "@type": "Brand",
      name: "NECSTORE",
    },

    offers: {
      "@type": "Offer",
      url: "https://necstore.vercel.app/produit/" + data.slug,
      priceCurrency: "EUR",
      price: data.price,
      priceValidUntil: data.createdAt,
    },
  };

  return (
    <div className={styles.item}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Images data={data} />
      <ProductInfos data={data} />
    </div>
  );
};

export default Produit;
