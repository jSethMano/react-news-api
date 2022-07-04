import React from "react";
import style from "./CategoriesNavigation.module.scss";

const categories = [
  {
    id: 0,
    category: "Homepage",
  },
  {
    id: 1,
    category: "Technology",
  },
  {
    id: 2,
    category: "Business",
  },
  {
    id: 3,
    category: "Entertainment",
  },
  {
    id: 4,
    category: "Health",
  },
  {
    id: 5,
    category: "Science",
  },
  {
    id: 6,
    category: "Sports",
  },
];

const CategoriesNavigation = () => {
  //POPULATE CATEGORY NAMES
  const listCategories = categories.map((categoryName) => (
    <button className={`${style["nav-buttons"]}`} key={categoryName.id}>
      {categoryName.category}
    </button>
  ));

  return (
    <React.Fragment>
      <nav className={style.nav}>{listCategories}</nav>
    </React.Fragment>
  );
};

export default CategoriesNavigation;
