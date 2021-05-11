import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large uk-margin-top">
          <div>
            <h1 className="uk-heading-medium uk-margin-top">
              Olá, eu sou Rafael,
              <br /> desenvolvedor de{" "}
              <span style={{ color: "rgba(0, 1, 2, 0.518)" }}>
                software fullstack
              </span>
              .
            </h1>
            <h4 className="uk-heading-bullet " style={{ fontSize: 24 }}>
              Bem vindo a minha página pessoal, aqui você pode encontrar algumas
              coisinhas que eu escrevo, tutoriais e trabalhos realizados.
            </h4>
            <div>
              <ul style={{ fontSize: 24 }}>
                <li>
                  <span role="img" aria-label="image">
                    💼
                  </span>
                  Atualmente estou trabalhando como Full Stack Software Engineer
                  e Entusiasta da cultura DevOps.
                </li>
                <li>
                  <span role="img" aria-label="image">
                    👨‍💻
                  </span>
                  Trabalho com tecnologia/desenvolvimento desde 2017.
                </li>
                <li>
                  <span role="img" aria-label="image">
                    🎓
                  </span>
                  Bacharel em Sistemas de Informação.
                </li>
              </ul>
            </div>
          </div>
          <img
            src="http://3.bp.blogspot.com/-mY_TA5qOi9w/TyhAXzOLrQI/AAAAAAAAAFI/kuzcs_sl-UY/s1600/Boneco+Dan%C3%A7arino.gif"
            alt="img"
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage] = await Promise.all([fetchAPI("/homepage")]);

  return {
    props: { homepage },
    revalidate: 1,
  };
}

export default Home;
