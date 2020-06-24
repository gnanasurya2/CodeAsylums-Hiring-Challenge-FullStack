import React from "react";
import styled from "styled-components";
import Data from "./Data";

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: 30px;
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
      <div style={{ width: "100%", height: "90px" }}></div>
    </Wrapper>
  );
};

export default Gadget;
