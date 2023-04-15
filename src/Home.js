import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Home = () => {
  const [postsInState, setPostsInState] = useState([]);
  useEffect(() => {
    const makeAPICall = async () => {
      const postsResponse = await fetch(`http://localhost:3001/posts`);
      const postsData = await postsResponse.json();
      console.log(postsData);
      setPostsInState(postsData.posts);
    };
    makeAPICall();
  }, []);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      // A14: Check auth status according to the backend
      const response = await fetch(`http://localhost:3001/authStatus`, {
        //A15: Make sure to include the credentials info the got set using /login
        credentials: "include",
      });
      const data = await response.json();
      setLoggedIn(data.loggedIn);
    };
    checkAuth();
  }, []);

  return (
    <div>
       <h1 style={{color: "red"}}>Jen's Super Cool Blog</h1>
      <div className="row">
        {postsInState.map((post) => {
          return (
            <div className="col-4" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <div>By: {post.user.firstName}</div>
                  <h6>
                    {new Date(post.createdAt).toLocaleDateString()}{" "}
                    {new Date(post.createdAt).toLocaleTimeString()}
                  </h6>
                  <p className="card-text">{post.tagline}</p>
                  <Link to={`/post/${post.id}`} className="btn btn-primary">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {loggedIn ? (
        //Are they logged in? If yes, show them the Post Editor link.
        <Link to="/postEditor">Post Editor</Link>
      ) : (
        //If they aren't logged in, show them link to do so.
        <Link to="/login" style={{fontWeight: "bold", color: "slategrey",}}>Login</Link>
      )}
    </div>
  );
};

export default Home;
