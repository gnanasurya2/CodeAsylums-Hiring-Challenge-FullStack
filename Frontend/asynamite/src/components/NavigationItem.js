import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  margin-right: 15px;
  width: 25px;
  height: 25px;
`;

const Title = styled.p`
  color: white;
  font-size: 20px;
  padding-bottom: 15px;
`;

const NavigationItem = (props) => (
  <Wrapper>
    <Img src={props.img} alt={props.title} />
    <Title>{props.title}</Title>
  </Wrapper>
);

export default NavigationItem;
