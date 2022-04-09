<<<<<<< HEAD
import './App.css';
import NavBar from './components/shared/NavBar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/shared/NotFound';
import ProtectedRoute from './components/auth/ProtectedRoute';
import FetchUser from './components/auth/FetchUser';
import PostShow from './components/auth/post/PostShow';
import NewPost from './components/auth/post/NewPost';
import CommentShow from './components/auth/comment/CommentShow';
import NewComment from './components/auth/comment/NewComment';
import Posts from './components/auth/post/Posts';
import Categories from './components/auth/post/Category';
=======
import "./App.css";
import NavBar from "./components/shared/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/shared/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NotFound from "./components/shared/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import FetchUser from "./components/auth/FetchUser";
import PostShow from "./components/auth/post/PostShow";
import NewPost from "./components/auth/post/NewPost";
import CommentShow from "./components/auth/comment/CommentShow";
import NewComment from "./components/auth/comment/NewComment";
import Posts from "./components/auth/post/Posts";
import Favorites from "./components/auth/comment/Favorites";
>>>>>>> 01dcdd13d2fc7afea182582a59b746815cd39d6b

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <>
          <Routes>
            {/* Unprotected */}
<<<<<<< HEAD
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='*' element={<NotFound />} />
=======
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
>>>>>>> 01dcdd13d2fc7afea182582a59b746815cd39d6b

            {/* Protected (need to be logged in to see) */}
            <Route element={<ProtectedRoute />}>
              <Route path="/posts" element={<Posts />} />
              <Route path="/post_show" element={<PostShow />} />
              <Route path="/new_post" element={<NewPost />} />
              <Route path="/comment_show" element={<CommentShow />} />
              <Route path="/new_comment" element={<NewComment />} />
              <Route path="/favorites" element={<Favorites />} />
            </Route>
          </Routes>
        </>
      </FetchUser>
    </>
  );
}

export default App;
