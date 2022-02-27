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
    <div style={{ border: "2px solid black", margin: "15px" }}>
      <h1>{data.title}</h1>
      <article>
        <b>{data.body}</b>
      </article>
      <p>Category: {data.category_name}</p>
      <p>Author: {data.author}</p>
    </div>
  );
};

export default ReadSingle;
