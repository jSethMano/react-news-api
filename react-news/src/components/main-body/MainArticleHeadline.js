import React from "react";

import style from "./MainArticleHeadline.module.scss";

const MainArticleHeadline = (props) => {
  const openMainArticleHandler = (e) => {
    const articleData = props.selectedArticle;
    console.log(articleData);

    props.article(articleData);
    window.scrollTo(0, 0);

    // const selectedArticle = {
    //   mainArticleTitle: articleData.title,
    //   mainArticleImage: articleData.urlToImage,
    //   mainArticleContent: articleData.content,
    //   mainArticleAuthor: articleData.author,
    // };
  };

  return (
    <React.Fragment>
      <div className={`${style["main-article-headline-container"]}`}>
        <h2 onClick={openMainArticleHandler}>{props.headlineTitle}</h2>
        <div className={`${style["img-container"]}`}>
          <img src={props.headlineImage} alt="Headline Article"></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainArticleHeadline;
