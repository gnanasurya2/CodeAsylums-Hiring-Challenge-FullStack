import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  position: relative;
  top: -15px;
  left: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px 0px;
`;

const Bar = styled.div`
  width: 70%;
  height: 4px;
  border-radius: 6px;
  background-color: white;
`;
const Hamburger = (props) => {
  return (
    <Wrapper>
      <Bar />
      <Bar />
      <Bar />
    </Wrapper>
  );
};

export default Hamburger;
