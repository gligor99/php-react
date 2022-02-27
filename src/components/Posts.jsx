import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [data, setData] = useState([]);

  const fetchData = () =>
    axios
      .get("http://localhost/php_rest_myblog/api/post/read.php")
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
    <div>
      {data.map((item) => {
        const id = item.id;
        return (
          <div
            key={item.id}
            style={{ border: "2px solid black", margin: "15px" }}
          >
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <Link to={`post/${item.id}/read`}>Read Post</Link>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "red",
              }}
            >
              <p style={{ marginRight: "15px" }}>
                Category: {item.category_name}
              </p>
              <p>{item.author}</p>
            </div>
            <Link style={{ marginRight: "15px" }} to={`post/${item.id}/edit`}>
              Edit
            </Link>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
