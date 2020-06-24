import React from "react";
import styles from "../styles/Dashboard.module.css";
import Gadget from "../components/Gadget";
import Profile from "../components/Profile";
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
            />
            <Gadget
              title="Achievements"
              width="100%"
              height="calc((100vh - 200px) / 3)"
            />
          </div>
          <div className={styles.bigCard}>
            <Gadget title="Rank" width="100%" height="100%" />
          </div>
        </div>
        <Gadget
          title="Go to your tracks"
          width="100%"
          height="calc((100vh - 200px) / 3)"
        />
      </div>
    </div>
  );
};

export default Dashboard;
