import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const [loading, setLoading] = useState(false);
  const [singleNewsData, setSingleNewsData] = useState({});
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const newsFetched = await response.json();
      console.log(newsFetched);
      setSingleNewsData(newsFetched);
      setLoading(false);
    }
    fetchNews();
  }, []);

  return (
    <section className="text-center py-10">
      {loading ? (
        <h1 className="text-7xl animate-ping text-center font-bold text-green">
          Loading...
        </h1>
      ) : (
        <div>
          <h1 className="text-7xl  text-center font-bold text-green-500">
            {singleNewsData.title}
          </h1>
          <p className="my-10">{singleNewsData.body}</p>
        </div>
      )}
    </section>
  );
};

export default NewsDetail;
