import React from "react";
import Asynamite from "../asset/images/asynamiteDashboard.png";
import styles from "../styles/SigninLayout.module.css";

const SigninLayout = (props) => {
  return (
    <div>
      <div className={styles.header}>
        <img src={Asynamite} alt="Asynamite" className={styles.logo} />
        <button className={styles.button}>Log Out</button>
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default SigninLayout;
