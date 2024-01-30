import Pagination from "../../pagination/Pagination";
import { Products } from "../../../data";
import Link from "next/link";
import styles from "./productList.module.css";

const BASE_URL = process.env.NEXTAUTH_URL;

async function getData(page, cat) {
  const res = await fetch(
    `${BASE_URL}/api/products?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to load data."); 
  }

  return res.json();
}

// const getData = (page, cat) => {
//   const data = cat ? Products.filter((item) => item.catSlug === cat) : Products;

//   if (data) {
//     return data;
//   }

//   return notFound();
// };

const ProductList = async ({ page, cat }) => {
  const data = await getData(page, cat);
  const count = data.length;

  const POST_PER_PAGE = 8;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {data
          .slice(
            POST_PER_PAGE * (page - 1),
            POST_PER_PAGE * (page - 1) + POST_PER_PAGE
          )
          .map((item) => (
            <Link href={`/produit/${item.slug}`} key={item._id}>
              <div className={styles.card}>
                <img
                  src={item.image[0]}
                  alt="blog1"
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h2 className={styles.h3}>{item.title}</h2>
                  <div>{item.price} € </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default ProductList;
