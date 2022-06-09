import * as React from "react";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as RegularIcons from "@fortawesome/free-regular-svg-icons";
import * as BrandsIcons from "@fortawesome/free-brands-svg-icons";
import * as SoildIcons from "@fortawesome/free-solid-svg-icons";
import siyunCharacter from "../images/siyun.jpg";

const Home = styled.div`
  margin-top: 70px;
  background: linear-gradient(-11deg, #fff 50%, #f6ab00 50%);
`;

const Title = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 55px;
  display: flex;
  justify-content: center;
`;

const OrangeTitle = styled(Title)`
  color: #fff;
`;

const Image = styled.img`
  display: flex;
  border-radius: 50%;
  width: 250px;
  margin: 30px auto;
`;

const Content = styled.div`
  text-align: center;
  margin-top: 45px;
  span {
    font-weight: 700;
    margin: 0 5px;
  }
`;

const Contact = styled.div`
  text-align: center;
  margin: 90px 0 40px 0;
  font-weight: 700;
  font-size: 25px;
`;

const ContactListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactList = styled.div`
  display: block;
`;

const ContactListItem = styled.div`
  margin-bottom: 10px;
`;

const ContactListLink = styled.a`
  color: black;
  cursor: pointer;
`;

const ContactListIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
  height: 18px;
  width: 18px;
`;

const HomePage = () => {
  return (
    <Home>
      <NavigationBar pageTitle="Home" />
      <Title>
        <OrangeTitle>SIYUN</OrangeTitle>'S PORTFOLIO
      </Title>
      <Image src={siyunCharacter}></Image>
      <Content>
        こんにちは<span>Front-End Developer</span>シユンです。
      </Content>
      <Contact>Contact</Contact>
      <ContactListContainer>
        <ContactList>
          <ContactListItem>
            <ContactListIcon icon={RegularIcons.faEnvelope} />
            leesiyun.official@gmail.com
          </ContactListItem>
          <ContactListItem>
            <ContactListLink href="https://github.com/leesiyun" target="_blank">
              <ContactListIcon icon={BrandsIcons.faGithub} />
              github.com/leesiyun
            </ContactListLink>
          </ContactListItem>
          <ContactListItem>
            <ContactListLink
              href="https://www.wantedly.com/id/leesiyun"
              target="_blank"
            >
              <ContactListIcon icon={SoildIcons.faW} />
              wantedly.com/id/leesiyun
            </ContactListLink>
          </ContactListItem>
          <ContactListItem>
            <ContactListIcon icon={SoildIcons.faLocationDot} />
            Setagaya-ku, Tokyo
          </ContactListItem>
        </ContactList>
      </ContactListContainer>
    </Home>
  );
};

export default HomePage;
