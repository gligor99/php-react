import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSingle = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchData = () =>
    axios
      .get(`http://localhost/php_rest_myblog/api/post/read_single.php?id=${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="p-5 bg-secondary text-center h2 text-white">
        {data.title}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 d-flex justify-content-between text-muted border-bottom">
            <span>Category: {data.category_name}</span>
            <span>Author: {data.author}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-6 offset-3 py-4">
            <article className="border p-3">{data.body}</article>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadSingle;
