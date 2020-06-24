import React, { useState, useEffect } from "react";
import styles from "../styles/Layout.module.css";
import Logo from "../asset/images/logo.png";
import Link from "./Link";
import Hamburger from "./MenuHamburger";
const Layout = (props) => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (window.innerWidth > 1200) {
      setToggle(false);
    }
  }, []);
  const clickHandler = () => {
    setToggle((state) => !state);
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img src={Logo} alt="logo" className={styles.logo} />
        <div
          className={styles.headerClass}
          style={{
            display: toggle ? "none" : "flex",
          }}
        >
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
        </div>
        <div className={styles.hamburger}>
          <Hamburger
            style={{ zIndex: "1000" }}
            color="white"
            toggle={toggle}
            onClick={clickHandler}
          />
        </div>
      </header>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Layout;
