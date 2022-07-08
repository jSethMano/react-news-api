import React from "react";
import HeroSection from "../hero-section/HeroSection";
import Headlines from "./Headlines";

const HomeSection = (props) => {
  const passArticleHandler = (data) => {
    console.log(data);
    props.articleDataToApp(data);
  };

  return (
    <React.Fragment>
      <HeroSection />
      <Headlines articleDataToHomeSection={passArticleHandler} />
    </React.Fragment>
  );
};

export default HomeSection;
