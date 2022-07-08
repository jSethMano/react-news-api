import React, { useState } from "react";
import Header from "./components/header/Header.js";
import CategoriesNavigation from "./components/hero-section/CategoriesNavigation.js";
import HomeSection from "./components/main-body/HomeSection.js";
import MainArticle from "./components/main-body/MainArticle.js";
import Footer from "./components/footer/Footer.js";

const App = () => {
  const [showMainArticle, setShowMainArticle] = useState(false);
  const [articleData, setArticleData] = useState("");

  const showArticleHandler = (data) => {
    setShowMainArticle(data[0]);
    setArticleData(data);
  };

  const backStateHandler = (data) => {
    setShowMainArticle(data);
  };

  return (
    <React.Fragment>
      <header>
        <Header />
        <CategoriesNavigation />
      </header>

      <main>
        {!showMainArticle && (
          <HomeSection articleDataToApp={showArticleHandler} />
        )}
        {showMainArticle && (
          <MainArticle
            articleDetails={articleData}
            backState={backStateHandler}
          />
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default App;
