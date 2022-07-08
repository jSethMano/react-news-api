import React, { useEffect, useReducer, useState } from "react";
import HeadlinesWrapper from "../../wrapper/HeadlinesWrapper";
import style from "./Headline.module.scss";

const HEADLINE_SOURCES = [
  {
    id: "bloomberg",
    source: "Bloomberg",
  },
  {
    id: "bbc-news",
    source: "BBC",
  },
  {
    id: "business-insider",
    source: "Business Insider",
  },
  {
    id: "abc-news",
    source: "ABC",
  },
  {
    id: "cnn",
    source: "CNN",
  },
  {
    id: "espn",
    source: "ESPN",
  },
];

const initialState = HEADLINE_SOURCES[4].id;

const Headlines = (props) => {
  const [currentHeadlineList, setCurrentHeadlineList] = useState([]); //USE TO POPULATE THE HEADLINES FROM FETCHED OBJECT ARRAY
  // const [isButtonActive, setIsButtonActive] = useState(false);

  const changeSource = (state, action) => {
    switch (action.type) {
      case "Bloomberg":
        return (state = HEADLINE_SOURCES[0].id);
      case "BBC":
        return (state = HEADLINE_SOURCES[1].id);
      case "Business Insider":
        return (state = HEADLINE_SOURCES[2].id);
      case "ABC":
        return (state = HEADLINE_SOURCES[3].id);
      case "CNN":
        return (state = HEADLINE_SOURCES[4].id);
      case "ESPN":
        return (state = HEADLINE_SOURCES[5].id);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(changeSource, initialState);

  //PASS DATA TO HOME SECTION
  const passArticleHandler = (articleData) => {
    console.log(articleData);
    props.articleDataToHomeSection(articleData);
  };

  //FUNCTION FOR SOURCES NAVIGATION
  const sourcesNavHandler = (e) => {
    dispatch({
      type: e.target.textContent,
      current: e.currentTarget.textContent,
    });
  };

  //POPULATE SOURCES NAVIGATION LINKS
  const headlineSources = HEADLINE_SOURCES.map((sourceTitle) => (
    <button
      className={style["nav-button"]}
      key={sourceTitle.id}
      onClick={sourcesNavHandler}
    >
      {sourceTitle.source}
    </button>
  ));

  useEffect(() => {
    //SOURCE
    const sourcesUrl = `https://newsapi.org/v2/top-headlines?sources=${state}&apiKey=c013cc0c9e0c4ac28de93e9591e49f4d`;

    const fetchHeadlineFromSources = async () => {
      try {
        const res = await fetch(sourcesUrl);
        if (res.ok) {
          console.log(res.status);
          const data = await res.json();
          return data;
        }
      } catch (e) {
        return e;
      }
      return () => {
        console.log("Unmounted");
      };
    };

    fetchHeadlineFromSources().then((sourcesTitleData) => {
      console.log(sourcesTitleData.articles);

      setCurrentHeadlineList(
        sourcesTitleData.articles.map((headline) => (
          // <li key={headline.url}>{headline.title}</li>
          <HeadlinesWrapper
            key={headline.url}
            headlineImage={headline.urlToImage}
            headlineTitle={headline.title}
            headlineContent={headline.content}
            headlineAuthor={headline.author}
            articleHandler={passArticleHandler} //PASS DATA TO HOME SECTION
          />
        ))
      );
    });
  }, [state]);

  return (
    <React.Fragment>
      <h1 className={`${style["section-title"]}`}>Top Headlines</h1>
      <ul className={`${style["nav-container"]}`}>{headlineSources}</ul>
      <div className={`${style["headline-list-container"]}`}>
        {currentHeadlineList}
      </div>
    </React.Fragment>
  );
};

export default Headlines;
