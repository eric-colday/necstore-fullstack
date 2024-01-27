import React from "react";
import { notFound } from "next/navigation";
import { Posts } from "../../../data";
import SinglePost from "../../../components/blog/singlePost/SinglePost";

const getData = (slug) => {
  const data = Posts.find((item) => item.slug === slug);

  if (data) {
    return data;
  }

  return notFound();
};

export async function generateMetadata({ params }) {
  const data = await getData(params.slug);
  return {
    title: data.title,
    description: data.description,
  };
}

const SinplePost = ({ params }) => {
  const { slug } = params;
  const data = getData(slug);

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
