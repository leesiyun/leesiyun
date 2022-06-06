import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostLink from "../components/PostLink";

const ProjectsPage = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  const Posts = nodes
    .filter((node) => node.frontmatter.folder === "projects")
    .map((node) => <PostLink key={node.id} post={node} />);
  return (
    <Layout pageTitle="Projects">
      <ul>{Posts}</ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          slug
          date
          folder
          icon
        }
        id
        slug
      }
    }
  }
`;

export default ProjectsPage;
