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

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <>
          <Routes>
            {/* Unprotected */}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />

            {/* Protected (need to be logged in to see) */}
            <Route element={<ProtectedRoute />}>
              <Route path='/posts' element={<Posts />} />
              <Route path= '/post_show' element={<PostShow />} />
              <Route path= '/new_post' element={<NewPost />} />
              <Route path= '/comment_show' element={<CommentShow />} />
              <Route path= '/new_comment' element={<NewComment />} />
            </Route>
          </Routes>
        </>
      </FetchUser>
    </>
  );
}

export default App;
