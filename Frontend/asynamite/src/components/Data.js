import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 90%;
  display: flex;
  padding:0px 20px;
  flex-direction:row
  justify-content: flex-start;
  margin-top:50px;
  align-items: flex-start;
  color:white;
`;
const Title = styled.h3`
  font-size: 24px;
`;
const Content = styled.h1`
  font-size: 60px;
  color: #eaab66;
`;
const Data = (props) => (
  <Wrapper>
    <img src={props.image} alt={props.title} />
    <div style={{ marginLeft: "20px" }}>
      <Title>{props.title}</Title>
      <Content>{props.content}</Content>
    </div>
  </Wrapper>
);

export default Data;
