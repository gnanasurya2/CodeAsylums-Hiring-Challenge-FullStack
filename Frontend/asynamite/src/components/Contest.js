import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import background from "../asset/images/1.png";

const Wrapper = styled.div`
  position: relative;
  width: 350px;
  height: 450px;
  background-color: white;
  justify-self: center;
  margin: 30px 0px;
  background: url(${background});
  cursor: pointer;
  transition: all 0.2s linear;
  &::before {
    display: block;
    content: "";
    width: 100%;
    height: 13px;
    background-color: #e9aa65;
  }
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  margin-top: 40%;
  padding: 0px 30px;
  height: 60%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-top: 10px;
`;

const YellowWrapper = styled.div`
  padding: 5px 10px;
  background-color: #eaab66;
  color: white;
  font-weight: bold;
  margin-top: 5px;
`;

const ButtonTitle = styled.h2`
  font-size: 22px;
  color: white;
`;

const MainTitle = styled.h1`
  color: white;
  font-size: 22px;
  margin: 10px 0px;
`;

const Content = styled.p`
  font-size: 16px;
  color: white;
  margin-top: 10px;
`;
const Contest = (props) => {
  return (
    <Wrapper>
      <Hamburger />
      <InnerWrapper>
        <ButtonWrapper>
          <ButtonContainer>
            <ButtonTitle>Starts</ButtonTitle>
            <YellowWrapper>{props.startDate}</YellowWrapper>
          </ButtonContainer>
          <ButtonContainer>
            <ButtonTitle>Ends</ButtonTitle>
            <YellowWrapper>{props.endDate}</YellowWrapper>
          </ButtonContainer>
        </ButtonWrapper>
        <MainTitle>{props.title}</MainTitle>
        <Content>{props.content}</Content>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Contest;
