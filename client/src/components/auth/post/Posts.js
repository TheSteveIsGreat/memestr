import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Posts = () => {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState(null)

  useEffect(() => {
    getPosts()
    getComments()
  }, [])
  
  const getPosts = async () => {
    try {
      let res = await axios.get('/api/posts/')
      // console.log(res)
      setPosts(res.data)
    } catch (error) {
      alert ('Error occurred getting posts')
      console.log(error)
    }   
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

  const handlePostLike = async (id) => {
    let filteredPosts = posts.find((c) => c.post_id == id)
    return filteredPosts.map((c) => {
      c.like++
    })
  }

  // const handleCommentLike = (id) => {

  // }

  const renderComments = (id) => {
    // console.log('id: ', id)
    let filteredComments = comments.filter((c) => c.post_id == id)
    // console.log('filtered comments:', filteredComments[0])
    if (filteredComments[0]) {
      return filteredComments.map ((c) => {
    return (
      <div key={c.id}>
        <p>{c.input}</p>
        <button>❤️  {c.like}</button>
        <button>👎  {c.dislike}</button>
      </div>
    )
      })
    }
    return (<p>No comments have been added</p>)
  }

  const renderPosts = () => {
    return posts.map((p) => {
      return (
        <div key={p.id} style={{border: '1px solid', maxWidth: '500px'}}>
          <h3>{p.title}</h3>
          <img src={p.meme} style={{maxBlockSize: '300px'}}></img>
          <button onClick={handlePostLike}>❤️  {p.like}</button>
          <button>👎  {p.dislike}</button>
          <Link to={`/post_show/${p.id}`}>View Post</Link>
          <div>
            {comments && renderComments(p.id)}
          </div>
        </div>
      )
    })
  }
  
  return (
  <>
  <h1>Posts</h1>
  {renderPosts()}
  </>)
}

export default Posts