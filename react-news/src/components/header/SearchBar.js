import React from "react";
import style from "./Header.module.scss";

const SearchBar = () => {
  return (
    <React.Fragment>
      <form className={`${style["search-bar"]}`}>
        <input
          className={`${style["header-textbox"]}`}
          type="textbox"
          placeholder="Search News here"
        />
        <button className={`${style["header-search"]}`} type="submit">
          Search
        </button>
      </form>
    </React.Fragment>
  );
};

export default SearchBar;
