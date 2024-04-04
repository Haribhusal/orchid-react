import React from "react";
import { Link } from "react-router-dom";

const NewsComponent = ({ newsData }) => {
  console.log(newsData);
  return (
    <div className=" group p-2 rounded-md shadow-sm  transition-all duration-200 hover:-translate-y-3 hover:shadow-xl ">
      <img
        src={`https://picsum.photos/id/${newsData.id}/500/300`}
        className="rounded-md"
        alt=""
      />
      <h2 className="text-2xl group-hover:text-custom my-3 font-semibold">
        {newsData.title}
      </h2>
      <p>{newsData.body.substring(0, 100)}...</p>
      <Link to={`/news-detail/${newsData.id}`}>
        <button className="bg-custom rounded-md px-5 py-3 text-white mt-5">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default NewsComponent;
