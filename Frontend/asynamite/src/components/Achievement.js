import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: ${(props) => (props.active ? "white" : "#663A75")};
  padding-top: 30px;
`;
const Achievement = (props) => (
  <Wrapper active={props.active}>
    <img
      src={props.image}
      alt={props.title}
      style={{ marginBottom: "20px", height: "70px" }}
    />
    <h3 style={props.style}>{props.title}</h3>
  </Wrapper>
);

export default Achievement;
