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
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Update Post</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Title: </label>
              </th>
              <td>
                <input type="text" name="title" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Body: </label>
              </th>
              <td>
                <input type="text" name="body" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Author: </label>
              </th>
              <td>
                <input type="text" name="author" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Category: </label>
              </th>
              <td>
                <input
                  type="number"
                  name="category_id"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>ID: </label>
              </th>
              <td>
                <input type="number" name="id" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default UpdatePost;
