import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  console.log(data);

  const fetchData = () =>
    axios
      .get("http://localhost/php_rest_myblog/api/post/read.php")
      .then((res) => {
        const postsData = res.data;
        setData(postsData);
      })
      .catch((error) => {
        console.log(error);
      });

  const deleteData = () =>
    axios.delete("http://localhost/php_rest_myblog/api/post/delete.php", {
      data: { id: id },
    });

  useEffect(() => {
    fetchData();
    deleteData();

    return () => {
      window.location.reload()
    };
    
  }, [id]);

  if (data.message === "No Posts Found") {
    return (
      <div className="container p-3">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <span>Lista je prazna.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {data?.map((item) => {
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
                    <p className="card-text">{`${item.body.substring(
                      0,
                      150
                    )}...`}</p>
                    <Link
                      className="btn btn-warning me-3"
                      to={`post/${item.id}/read`}
                    >
                      Read Post
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-danger"
                      onClick={() => setId(item.id)}
                    >
                      Delete
                    </button>
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
