import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const { id } = useParams();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost/php_rest_myblog/api/post/update.php", inputs)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="p-5 bg-secondary text-center h2 text-white">
        <span>Update Post: {id}</span>
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
              <input
                className="form-control my-2"
                type="number"
                placeholder="ID"
                name="id"
                onChange={handleChange}
                aria-label="default input example"
              />
              <button className="btn btn-primary form-control">Update post</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePost;
