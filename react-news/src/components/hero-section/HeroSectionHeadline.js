import React, { useEffect, useState } from "react";
import HeroHeadlineWrapper from "../../wrapper/HeroHeadlineWrapper";

const topHeadlinesUrl =
  "https://newsapi.org/v2/top-headlines?country=ph&apiKey=c013cc0c9e0c4ac28de93e9591e49f4d";

const fetchNews = async () => {
  try {
    const res = await fetch(topHeadlinesUrl);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else if ((res.status = !res.ok)) {
      console.log(res.status);
    }
  } catch (e) {
    return e;
  }
};

const HeroSectionHeadline = (props) => {
  const [currentHeadlineTitle, setCurrentHeadlineTitle] = useState("No Data");
  const [currentHeadlineImage, setCurrentHeadlineImage] = useState("No Data");

  //USE TO LOAD HEADLINE AND INITIATE FULFILL FETCH PROMISE
  useEffect(() => {
    fetchNews().then((headlineData) => {
      const HEADLINE = {
        title: headlineData.articles[0].title,
        image: headlineData.articles[0].urlToImage,
      };
      setCurrentHeadlineTitle(HEADLINE.title);
      setCurrentHeadlineImage(HEADLINE.image);
    });
  }, []);

  return (
    <React.Fragment>
      <HeroHeadlineWrapper
        headlineTitle={currentHeadlineTitle}
        headlineImage={currentHeadlineImage}
      />
    </React.Fragment>
  );
};

export default HeroSectionHeadline;
