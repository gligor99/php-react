import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [inputs, setInputs] = useState([]);
  const [status, setStatus] = useState(undefined);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/php_rest_myblog/api/post/create.php", inputs)
      .then((res) => {
        setStatus({ type: "success" });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        setStatus({ type: "error", error });
      });
  };

  // const handleRedirect = (res) => {
  //   if (res.status === 200) {
  //     window.location.href = "http://localhost:3000/";
  //   } else {
  //     setStatus({ type: "error", error });
  //   }
  // };

  return (
    <>
      <div className="p-5 bg-secondary text-center h2 text-white">
        <span>Create Post</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <form onSubmit={handleSubmit}>
              <input
                className="form-control my-2"
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                aria-label="default input example"
              />
              <input
                className="form-control my-2"
                type="text"
                placeholder="Article"
                name="body"
                onChange={handleChange}
                aria-label="default input example"
              />
              <input
                className="form-control my-2"
                type="text"
                placeholder="Author"
                name="author"
                onChange={handleChange}
                aria-label="default input example"
              />
              <input
                className="form-control"
                type="number"
                placeholder="Category"
                name="category_id"
                onChange={handleChange}
                aria-label="default input example"
              />
              <button className="btn btn-primary form-control my-2">
                Create post
              </button>
            </form>
            {status?.type === "success" && (
              <div className="alert alert-warning" role="alert">
                Post Created
              </div>
            )}
            {status?.type === "error" && (
              <div className="alert alert-danger" role="alert">
                Error. Something went wrong. Post is not created!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
