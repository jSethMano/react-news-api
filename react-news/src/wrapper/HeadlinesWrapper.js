import React from "react";
import style from "./HeadlinesWrapper.module.scss";

function HeadlinesWrapper(props) {
  return (
    <React.Fragment>
      <div className={`${style["card-container"]}`}>
        <div className={`${style["img-section"]}`}>
          <img src={props.headlineImage} alt="This is a headline"></img>
        </div>

        <div className={`${style["desc-section"]}`}>
          <h1>{props.headlineTitle}</h1>
          <button>Read</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeadlinesWrapper;
