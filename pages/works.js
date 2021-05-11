import React from "react";
import Image from "../components/image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Works = ({ works, workspage }) => {
  console.log(works);
  return (
    <Layout>
      <Seo seo={workspage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1 class="uk-heading-medium uk-heading-bullet">
            {workspage.hero?.title}{" "}
            <span uk-icon="icon: check; ratio: 2"></span>
          </h1>
          <div
            class="uk-child-width-1-4@m uk-flex uk-flex-wrap"
            uk-parallax="bgy: -200"
          >
            {works.length ? (
              works.map((item) => {
                return (
                  <>
                    <div
                      class="uk-card uk-card-default uk-height-large uk-margin-left uk-margin-right uk-margin-top uk-margin-bottom"
                      uk-grid
                    >
                      <div class="uk-card-media-left">
                        <Image image={item.image[0]} uk-cover />
                      </div>
                      <div>
                        <div class="uk-card-body">
                          <h3 class="uk-card-title">{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="uk-card uk-card-default uk-height-large uk-margin-left uk-margin-right uk-margin-top uk-margin-bottom"
                      uk-grid
                    >
                      <div class="uk-card-media-left">
                        <Image image={item.image[0]} uk-cover />
                      </div>
                      <div>
                        <div class="uk-card-body">
                          <h3 class="uk-card-title">{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="uk-card uk-card-default uk-height-large uk-margin-left uk-margin-right uk-margin-top uk-margin-bottom"
                      uk-grid
                    >
                      <div class="uk-card-media-left">
                        <Image image={item.image[0]} uk-cover />
                      </div>
                      <div>
                        <div class="uk-card-body">
                          <h3 class="uk-card-title">{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <p>Sem trabalhos realizados</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [works, workspage] = await Promise.all([
    fetchAPI("/works"),
    fetchAPI("/workspage"),
  ]);

  return {
    props: { works, workspage },
    revalidate: 1,
  };
}

export default Works;
