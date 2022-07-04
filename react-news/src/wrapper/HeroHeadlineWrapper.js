import React from "react";
import style from "./HeroHeadlineWrapper.module.scss";

const HeroHeadlineWrapper = (props) => {
  return (
    <React.Fragment>
      <figure className={`${style["hero-headline-container"]}`}>
        <h1>{props.headlineTitle}</h1>
        <div className={`${style["image-container"]}`}>
          <img src={props.headlineImage} alt="Headline "></img>
        </div>
        <figcaption></figcaption>
      </figure>
    </React.Fragment>
  );
};

export default HeroHeadlineWrapper;
