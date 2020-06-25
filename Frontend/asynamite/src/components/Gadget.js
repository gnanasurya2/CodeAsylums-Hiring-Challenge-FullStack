import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: 30px;
  border-radius: 7px;
  background-color: #241125;
`;

const Title = styled.h1`
  width: 100%;
  background-color: #1a0d1e;
  padding: 10px 20px;
  color: white;
  font-size: 24px;
`;
const Gadget = (props) => {
  return (
    <Wrapper width={props.width} height={props.height}>
      <Title>{props.title}</Title>
      {props.children}
    </Wrapper>
  );
};

export default Gadget;
