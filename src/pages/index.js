import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <Layout pageTitle="Home">
      <div>SIYUN'S PORTFOLIO</div>
      <StaticImage alt="siyun character" src="../images/siyun.jpg" />
      <div>
        안녕하세요 <span>Front-End Developer</span> 이시윤 입니다.
      </div>
      <div>Contact</div>
    </Layout>
  );
};

export default HomePage;
