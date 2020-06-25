import React from "react";
import styles from "../styles/Dashboard.module.css";
import Gadget from "../components/Gadget";
import Profile from "../components/Profile";
import Data from "../components/Data";
import Clock from "../asset/images/clock.png";
import Contest from "../asset/images/contest.png";
import Medal from "../asset/images/medal.png";
import Achievement from "../components/Achievement";
import One from "../asset/images/A1.png";
import Two from "../asset/images/A2.png";
import Three from "../asset/images/3.png";
import Four from "../asset/images/4.png";
import Five from "../asset/images/5.png";
import Six from "../asset/images/6.png";
import Enthusiast from "../asset/images/enthusiast.png";
import Cpp from "../asset/images/cpp.png";
import Python from "../asset/images/python.png";
import DataStructures from "../asset/images/structure.png";

const Dashboard = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1>gnanasurya</h1>
      <Profile />
      <div className={styles.gadgetsWrapper}>
        <div className={styles.columnWrapper}>
          <div className={styles.column}>
            <Gadget
              title="Insights"
              width="100%"
              height="calc((100vh - 200px) / 3)"
            >
              <div className={styles.dataWrapper}>
                <Data image={Clock} title="Total Time Spent" content="26 hrs" />
                <Data
                  image={Contest}
                  title="Constest Participated"
                  content="2"
                />
                <Data image={Medal} title="Won" content="0" />
              </div>
            </Gadget>
            <Gadget
              title="Achievements"
              width="100%"
              height="calc((100vh - 200px) / 3)"
            >
              <div className={styles.dataWrapper}>
                <Achievement image={One} title="Beginner" active />
                <Achievement image={Two} title="Learner" active />
                <Achievement image={Three} title="Won a Contest" />
                <Achievement image={Four} title="Enthusiast" active />
                <Achievement image={Five} title="Dedicated" />
                <Achievement image={Six} title="Completed a track" />
              </div>
            </Gadget>
          </div>
          <div className={styles.bigCard}>
            <Gadget title="Rank" width="100%" height="100%">
              <div className={styles.rankWrapper}>
                <h1 className={styles.rank}>#156</h1>
                <h3 className={styles.pointsTitle}>Points Earned</h3>
                <h4 className={styles.points}>1350</h4>
                <img
                  src={Enthusiast}
                  alt="Enthusiast"
                  className={styles.image}
                />
                <p className={styles.position}>Enthusiast</p>
              </div>
            </Gadget>
          </div>
        </div>
        <Gadget
          title="Go to your tracks"
          width="100%"
          height="calc((100vh - 200px) / 3)"
        >
          <div className={styles.dataWrapper}>
            <div
              className={styles.dataWrapper}
              style={{ width: "60%", margin: "10px" }}
            >
              <Achievement
                image={Cpp}
                title="C++"
                style={{ color: "#EAAB66", fontSize: "26px" }}
              />
              <Achievement
                image={Python}
                title="Python"
                style={{ color: "#EAAB66", fontSize: "26px" }}
              />
              <Achievement
                image={DataStructures}
                title="Data Structures"
                style={{ color: "#EAAB66", fontSize: "26px" }}
              />
            </div>
            <button className={styles.startButton}>Start A New Track</button>
          </div>
        </Gadget>
      </div>
    </div>
  );
};

export default Dashboard;
