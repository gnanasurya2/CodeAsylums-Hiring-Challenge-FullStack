import React from "react";
import styles from "../styles/Contests.module.css";
import Contest from "../components/Contest";
import Background from "../asset/images/Background.png";
import Asynamite from "../asset/images/Asynamite.png";
import Footer from "../components/Footer";

const Contests = (props) => {
  return (
    <div
      style={{
        background: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.titleDiv}>
          <div className={styles.title}>
            <div className={styles.asynamiteDiv}>
              <img
                src={Asynamite}
                alt="asynamite"
                className={styles.asynamite}
              />
            </div>
            <span>Contest</span>
          </div>
          <div className={styles.toggleWrapper}>
            <h1>Active</h1>
            <div className={styles.line}></div>
            <h1 className={styles.inactive}>Older</h1>
          </div>
        </div>
        <div className={styles.contestWrapper}>
          <Contest />
          <Contest />
          <Contest />
          <Contest />
          <Contest />
          <Contest />
          <Contest />
          <Contest />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contests;
