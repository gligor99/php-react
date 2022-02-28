import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import ReadSingle from "./components/ReadSingle";

function App() {
  return (
    <div className="App font-monospace">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              PHP RestAPI - Test with React
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="navbar-item">
                  <Link to="/" className="nav-link" aria-current="page">
                    Posts
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link
                    to="post/create"
                    className="nav-link"
                    aria-current="page"
                  >
                    Create Post
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route index exact element={<Posts />} />
          <Route path="post/create" element={<CreatePost />} />
          <Route path="post/:id/edit" element={<UpdatePost />} />
          <Route path="post/:id/read" element={<ReadSingle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
