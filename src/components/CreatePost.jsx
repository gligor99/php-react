import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {
  const [inputs, setInputs] = useState([]);
  const [status, setStatus] = useState(undefined);

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
        handleRedirect(res);
      })
      .catch((error) => {
        setStatus({ type: "error", error });
      });
  };

  const handleRedirect = (res) => {
    if (res.status === 200) {
      window.location.href = "http://localhost:3000/";
    } else {
      setStatus({ type: "error", error });
    }
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
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing={20}>
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
              <td colSpan="2" align="right">
                <button>Add</button>
              </td>
            </tr>
          </tbody>
        </table>
        {status?.type === "success" && <h3>"Post Created."</h3>}
        {status?.type === "error" && (
          <h3>"Error. Something went wrong. Post not created"</h3>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
