import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostShow = () => {
  const [post, setPost] = useState ([])
  const [comments, setComments] = useState([])
  const params = useParams()

  useEffect(() => {
    getPost(params.id)
    getComments()
  }, [])

  const getPost = async (id) => {
    let res = await axios.get(`/api/posts/${id}`)
    console.log(res)
    setPost(res.data)
  }

  const getComments = async () => {
    try {
      let res = await axios.get('/api/comments')
      setComments(res.data)
    } catch (error) {
      alert ('Error occurred getting comments')
      console.log(error)
    }
  }

  const renderPost = () => {
      return (
        <div key={post.id} style={{border: '1px solid', maxWidth: '500px'}}>
          <h3>{post.title}</h3>
          <img src={post.meme} style={{maxBlockSize: '300px'}}></img>
          <button>❤️  {post.like}</button>
          <button>👎  {post.dislike}</button>
          <div>
            {comments && renderComments(post.id)}
          </div>
        </div>
      )
  }

  const renderComments = (id) => {
    // console.log('id: ', id)
    let filteredComments = comments.filter((c) => c.post_id == id)
    // console.log('filtered comments:', filteredComments[0])
    if (filteredComments) {
      return filteredComments.map ((c) => {
    return (
      <div key={c.id}>
        <p>{c.input}</p>
        <button>❤️  {c.like}</button>
        <button>👎  {c.dislike}</button>
        <div>
          {comments && renderComments()}
        </div>
      </div>
    )
      })
    } else {
    return (<p>No comments have been added</p>)
    }
  }

  return (
    <>
      <h1>Post Show</h1>
      {post && renderPost()}
    </>
  );
};

export default PostShow;
