import React, { useEffect, useState } from "react";
import MainArticleHeadline from "./MainArticleHeadline";

import style from "./MainArticle.module.scss";

const MainArticle = (props) => {
  const [currentHeadlines, setCurrentHeadlines] = useState([]);
  const data = props.articleDetails;

  const firstString = data[1].split(" ").shift();

  const fetchHeadlines = async () => {
    const headlinesUrl = `https://newsapi.org/v2/everything?q=${firstString}&apiKey=c013cc0c9e0c4ac28de93e9591e49f4d`;

    try {
      const res = await fetch(headlinesUrl);
      if (res.ok) {
        const data = await res.json();
        return data;
      } else if (!res.ok) {
        console.log(res.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchHeadlines().then((newsData) => {
      const firstThreeData = newsData.articles.slice(0, 3);
      console.log(firstThreeData);

      setCurrentHeadlines(
        firstThreeData.map((data) => (
          <MainArticleHeadline
            key={data.url}
            headlineTitle={data.title}
            headlineImage={data.urlToImage}
          />
        ))
      );
    });
  }, []);

  const backHandler = () => {
    props.backState(false);
  };

  return (
    <React.Fragment>
      <button className={`${style["back-button"]}`} onClick={backHandler}>
        Back
      </button>
      <div className={`${style["main-article-container"]}`}>
        <div className={`${style["image-container"]}`}>
          <img src={data[2]} alt="Article News"></img>
        </div>

        <article>
          <h1>{data[1]}</h1>
          <h3>{data[3]}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            bibendum ligula leo, eget maximus sapien consequat in. Donec
            interdum euismod ipsum, eget ullamcorper neque vulputate eu.
            Vestibulum at ligula felis. Aliquam ultricies turpis sem. Aenean
            eleifend viverra nunc sed vulputate. Duis luctus blandit mollis.
            Donec ut congue ante, suscipit iaculis purus. Morbi blandit, justo
            quis gravida auctor, sem odio pulvinar nunc, id facilisis justo arcu
            quis augue. Cras pellentesque rhoncus nulla tincidunt accumsan.{" "}
            <br />
            <br />
            Cras egestas non sapien ut posuere. Mauris molestie nunc eget massa
            fermentum vehicula. In sit amet ipsum at leo auctor mollis ac sit
            amet lacus. Curabitur vestibulum convallis varius. Cras aliquet
            lobortis leo, ut vehicula libero venenatis a. Donec maximus mauris
            in gravida placerat. Fusce in gravida turpis. Ut non leo sit amet
            massa placerat fermentum eu sit amet metus. Vivamus nunc libero,
            eleifend id eros vitae, efficitur congue nibh. Integer lacinia,
            magna sit amet lacinia finibus, augue dui gravida nunc, a
            sollicitudin dolor nunc quis lacus. Fusce imperdiet leo ipsum, ac
            lacinia diam tincidunt sit amet. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Maecenas
            sem felis, molestie ac magna quis, malesuada semper metus. Quisque
            aliquam nibh vitae tellus ultrices rutrum.
          </p>
          <br />
          <small>{data[4]}</small>
        </article>
      </div>
      <h1 className={`${style["headline-title"]}`}>Related News</h1>
      <div>{currentHeadlines}</div>
    </React.Fragment>
  );
};

export default MainArticle;
