import React from "react";
import Header from "./components/header/Header.js";
import CategoriesNavigation from "./components/hero-section/CategoriesNavigation.js";
import HeroSection from "./components/hero-section/HeroSection.js";
import Headlines from "./components/main-body/Headlines.js";

import style from "./App.module.scss";

const App = () => {
  return (
    <React.Fragment>
      <header>
        <Header />
        <CategoriesNavigation />
      </header>

      <main>
        <HeroSection />
        <Headlines />
      </main>
    </React.Fragment>
  );
};

export default App;
