import React from "react";
import HeroSectionHeadline from "./HeroSectionHeadline";

const HeroSection = (props) => {
  return (
    <React.Fragment>
      <HeroSectionHeadline data={props.dataVal} />
    </React.Fragment>
  );
};

export default HeroSection;

//AXIOS APPROACH

// https://levelup.gitconnected.com/fetch-api-data-with-axios-and-display-it-in-a-react-app-with-hooks-3f9c8fa89e7b
// https://www.freecodecamp.org/news/fetch-data-react/
