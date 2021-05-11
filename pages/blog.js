import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Blog = ({ articles, categories, blogpage }) => {
  return (
    <Layout>
      <Seo seo={blogpage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{blogpage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const [articles, categories, blogpage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/blog-page"),
  ]);

  return {
    props: { articles, categories, blogpage },
    revalidate: 1,
  };
}

export default Blog;
