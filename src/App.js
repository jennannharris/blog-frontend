import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PostEditor from "./PostEditor";
import Post from "./Post";
import Login from "./Login";
// #1 Import Component pages from seperate files so we can use them in the router

function App() {
	return (
		<div className="App">
			{/* #2 Set up as specific type of router that can be used in the browser */}
			<BrowserRouter>
				<Routes>
					{/* #3 Define the paths and components (elements) that show show up at each route */}
					<Route path="/" element={<Home />} />
					<Route path="/postEditor" element={<PostEditor />} />
					<Route path="/post" element={<Post />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/login/" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
