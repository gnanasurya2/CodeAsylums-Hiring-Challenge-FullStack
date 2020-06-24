import React from "react";
import styled from "styled-components";
import Logo from "../asset/images/logo.png";
import Link from "./Link";

const Wrapper = styled.footer`
  width: 100%;
  height: 200px;
  background-color: black;
  padding: 20px 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  @media screen and (max-width: 750px) {
    width: 90%;
    margin: 10px 0px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  padding-bottom: 15px;
`;

const Text = styled.p`
  margin-bottom: 7px;
`;
const Footer = (props) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <img
          src={Logo}
          alt="Logo"
          style={{ height: "100px", width: "200px" }}
        />
      </ContentWrapper>
      <ContentWrapper>
        <Title>Explore</Title>
        <Link>
          <Text>CodeAsylums for students</Text>
        </Link>
        <Link>
          <Text>CodeAsylums for Working Professionals</Text>
        </Link>
        <Link>
          <Text>Contact Us</Text>
        </Link>
        <Link>
          <Text>Career</Text>
        </Link>
      </ContentWrapper>
      <ContentWrapper>
        <Title>Follow</Title>
        <Link>
          <Text>Linkedin</Text>
        </Link>
        <Link>
          <Text>Instagram</Text>
        </Link>
        <Link>
          <Text>Facebook</Text>
        </Link>
        <Link>
          <Text>Github</Text>
        </Link>
      </ContentWrapper>
      <ContentWrapper>
        <Title>Visit</Title>
        <Link>
          <Text>Home</Text>
        </Link>
        <Link>
          <Text>About Us</Text>
        </Link>
        <Link>
          <Text>Contests</Text>
        </Link>
        <Link>
          <Text>Leaderboard</Text>
        </Link>
      </ContentWrapper>
      <ContentWrapper>
        <Text style={{ color: "white" }}>© CodeAsylumn 2020</Text>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Footer;
