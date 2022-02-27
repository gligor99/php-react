import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import ReadSingle from "./components/ReadSingle";

function App() {
  return (
    <div className="App">
      <h1>PHP RestAPI - Test with React</h1>
      <BrowserRouter>
        <nav style={{ display: "flex", justifyContent: "center" }}>
          <ul style={{ display: "flex" }}>
            <li style={{ marginRight: "30px" }}>
              <Link to="/">Posts</Link>
            </li>
            <li>
              <Link to="post/create">Create Post</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<Posts />} />
          <Route path="post/create" element={<CreatePost />} />
          <Route path="post/:id/edit" element={<UpdatePost />} />
          <Route path="post/:id/read" element={<ReadSingle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
