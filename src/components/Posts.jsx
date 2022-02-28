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
          <div className="container p-3" key={item.id}>
            <div className="row">
              <div className="col-6 offset-3">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <span>{item.title}</span>
                    <span className="text-muted">Author: {item.author}</span>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{item.body}</p>
                    <Link
                      className="btn btn-warning"
                      to={`post/${item.id}/read`}
                    >
                      Read Post
                    </Link>
                  </div>
                  <div className="card-footer text-muted d-flex justify-content-between">
                    <span>Category: {item.category_name}</span>
                    <Link to={`post/${item.id}/edit`}>Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
