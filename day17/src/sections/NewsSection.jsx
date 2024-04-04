import React, { useState, useEffect } from "react";
import NewsComponent from "./../components/NewsComponent";
import { Button } from "react-bootstrap";

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchNews() {
      setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const newsFetched = await response.json();
      console.log(newsFetched);
      setNewsData(newsFetched);
      setLoading(false);
    }
    fetchNews();
  }, []);
  const [showItems, setShowItems] = useState(6);
  console.log(newsData);
  console.log(typeof newsData);
  return (
    <div className="container max-w-screen-xl mx-auto">
      <div className="heading text-5xl font-bold text-center my-10">
        Latest News
      </div>
      <div className="newsList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {loading ? (
          <h1 className="text-7xl animate-ping text-center font-bold text-green">
            Loading...
          </h1>
        ) : (
          newsData
            .slice(0, showItems)
            .map((news) => <NewsComponent key={news.id} newsData={news} />)
        )}
      </div>
      <Button
        className="bg-green-600 my-10 text-white w-full hover:bg-green-800"
        onClick={() => setShowItems(showItems + 3)}
        variant="succes"
      >
        Show More News
      </Button>
    </div>
  );
};

export default NewsSection;
