import React from "react";
import logo from "../../resources/img/SVG/logo.svg"; //LOGO FOR HEADER
import style from "./Header.module.scss"; //HEADER CSS
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <React.Fragment>
      <div className={style.header}>
        <img
          src={logo}
          className={`${style["header-logo"]}`}
          alt="Header Logo"
        />

        {/* ==SEARCH BOX COMPONENT== */}
        <SearchBar />
      </div>
    </React.Fragment>
  );
};

export default Header;
