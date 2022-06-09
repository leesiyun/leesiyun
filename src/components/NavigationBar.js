import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const Nav = styled.nav`
  top: 0;
  padding: 26px 25px 20px 0px;
  position: fixed;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background-color: ${(props) =>
    props.pageTitle === "Home" ? `#f6ab00` : `#fff`};
  li {
    &:hover {
      font-size: 17px;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const Li = styled.li`
  padding-right: 2rem;
`;

const StyledLink = styled(Link)`
  color: black;
`;

const NavigationBar = ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Nav pageTitle={pageTitle}>
        <Ul>
          <Li>
            <StyledLink to="/">SIYUN</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/projects">Projects</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/learn">Learn</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/blog">Blog</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/career">Career</StyledLink>
          </Li>
        </Ul>
      </Nav>
    </div>
  );
};

export default NavigationBar;
