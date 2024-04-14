import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import Post from "./Post";
import PostDitels from "./PostDitels";
import { ListContext } from "./PostContext";

function App() {
  let List = [
    { id: 1, title: "post 1", body: "This is Body Post 1" },
    { id: 2, title: "post 2", body: "This is Body Post 2" },
    { id: 3, title: "post 3", body: "This is Body Post 3" },
  ];

  return (
    <ListContext.Provider value={List}>
      <div className="App">
        <Link to="/">
          <button>home</button>
        </Link>
        <Link to="/post">
          <button>post</button>
        </Link>

        <Routes>
          <Route path="/" element={<h2>hello World</h2>} />
          <Route path="/post" element={<Post />} />
          <Route path="/postDitels/:postId" element={<PostDitels />} />
          <Route
            path="*"
            element={
              <>
                <h2>404</h2>
              </>
            }
          />
        </Routes>
      </div>
    </ListContext.Provider>
  );
}

export default App;
