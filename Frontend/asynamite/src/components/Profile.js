import React from "react";
import styled from "styled-components";
import Background from "../asset/images/background.png";
import Photo from "../asset/images/user.png";
import NavigationItem from "./NavigationItem";
import Insight from "../asset/images/insights.png";
import Cup from "../asset/images/achievements.png";
import Active from "../asset/images/active.png";
import Tracks from "../asset/images/tracks.png";
import Participated from "../asset/images/participated.png";

const Wrapper = styled.div`
  width: 300px;
  height: calc(100vh - 100px);
  background: url(${Background});
  position: fixed;
  top: 100px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const User = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const Title = styled.h1`
  font-size: 22px;
  margin: 25px 0px;
`;
const Profile = (props) => {
  return (
    <Wrapper>
      <User src={Photo} />
      <h1 style={{ fontSize: "24px", marginTop: "20px" }}>Mahesh Adhikari</h1>
      <h2 style={{ fontSize: "18px", marginTop: "10px", color: "grey" }}>
        Student
      </h2>
      <h2 style={{ fontSize: "18px", marginTop: "4px", color: "grey" }}>
        Gangtok, Sikkim
      </h2>
      <Title>Navigation</Title>
      <NavigationItem img={Insight} title="Insights" />
      <NavigationItem img={Cup} title="Achievements" />
      <NavigationItem img={Tracks} title="Tracks" />
      <NavigationItem img={Active} title="Your Active Contests" />
      <NavigationItem img={Participated} title="Participated Contests" />
      <Title>Leaderboard</Title>
    </Wrapper>
  );
};

export default Profile;
