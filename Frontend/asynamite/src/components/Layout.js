import React from "react";
import styles from "../styles/Layout.module.css";
import Logo from "../asset/images/logo.png";
import Link from "./Link";

const Layout = (props) => {
  return (
    <div className={styles.wrapper}>
      <header>
        <img src={Logo} alt="logo" className={styles.logo} />
        <nav>
          <Link to="/layout">
            <p className={styles.link}>Home</p>
          </Link>
          <Link to="/aboutus">
            <p className={styles.link}>About us</p>
          </Link>
          <Link to="/Contests">
            <p className={styles.link}>Contests</p>
          </Link>
          <Link to="/Leaderboard">
            <p className={styles.link}>Leaderboard</p>
          </Link>
        </nav>
        <div className={styles.buttonWrapper}>
          <Link to="Login">
            <button
              className={styles.navButton}
              style={{ border: "3px solid #e14964", borderRadius: "3px" }}
            >
              Login
            </button>
          </Link>
          <Link to="Sign Up">
            <button className={styles.navButton}>Sign up</button>
          </Link>
        </div>
      </header>
      {props.children}
    </div>
  );
};

export default Layout;
