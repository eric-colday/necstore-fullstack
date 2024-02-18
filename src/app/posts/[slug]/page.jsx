import React from "react";
import { notFound } from "next/navigation";
import SinglePost from "../../../components/blog/singlePost/SinglePost";

const BASE_URL = process.env.NEXTAUTH_URL;


async function getData(slug) {
  const res = await fetch(`${BASE_URL}/api/posts/${slug}`, { 
    cache: "no-store", 
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params.slug);
  return {
    title: data.title,
    description: data.description,
  };
}

const SinplePost = async ({ params }) => {
  const data = await getData(params.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: data.title,
    image: data.image,
    datePublished: data.createdAt, 
    dateModified: data.createdAt,
    author: {
      "@type": "Person",
      name: "NECSTORE",
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SinglePost data={data} />
    </div>
  );
};

export default SinplePost;
