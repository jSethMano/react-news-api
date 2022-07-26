import React from "react";
import footerLogo from "../../resources/img/SVG/news-api-logo.png"; //LOGO FOR FOOTER
import styles from "./Footer.module.scss";

const FOOTER_NAV = [
  { id: 0, title: "ABOUT" },
  { id: 1, title: "WORKS" },
  { id: 2, title: "STORY" },
  { id: 3, title: "EMAIL" },
];

const listFooterNav = FOOTER_NAV.map((navLink) => {
  return (
    <a key={navLink.id} href="google.com">
      {navLink.title}
    </a>
  );
});

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-contents"]}>
        <p>POWERED BY</p>
        <img src={footerLogo} alt="Powered by News API" />
        <div className={styles.nav}>{listFooterNav}</div>
      </div>
    </div>
  );
};

export default Footer;
