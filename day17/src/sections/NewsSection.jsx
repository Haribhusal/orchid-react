import React from "react";
import newsData from "./../data/news.json";
import NewsComponent from "./../components/NewsComponent";

const NewsSection = () => {
  console.log(newsData);
  console.log(typeof newsData);
  return (
    <div className="container max-w-screen-xl mx-auto">
      <div className="heading">Latest News</div>
      <div className="newsList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {newsData.map((news) => (
          <NewsComponent key={news.id} newsData={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
