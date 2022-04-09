import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Posts = () => {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    getPosts()
  }, [])
  
  const getPosts = async () => {
    try {
      let res = await axios.get('/api/posts/')
      console.log(res)
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

  const renderComments = (id) => {
    let filteredComments = comments.filter((c) => c.post_id == id)
    console.log('filtered comments:', filteredComments)
    return (
      <div>
        <p>{filteredComments.input}</p>
        <button>❤️  {filteredComments.like}</button>
        <button>👎  {filteredComments.dislike}</button>
      </div>
    )
  }

  const renderPosts = () => {
    return posts.map((p) => {
      return (
        <div key={p.id} style={{border: '1px solid', maxWidth: '500px'}}>
          <h3>{p.title}</h3>
          <img src={p.meme} style={{maxBlockSize: '300px'}}></img>
          <button>❤️  {p.like}</button>
          <button>👎  {p.dislike}</button>
          <div>
            {renderComments(p.id)}
          </div>
        </div>
      )
    })
  }
  
  
  
  
  
  return (
  <>
  <h1>Posts</h1>
  {renderPosts()}
  <p>Posts</p>
  <p>{JSON.stringify(posts)}</p>
  <p>Comments</p>
  <p>{JSON.stringify(comments)}</p>
  </>)
}

export default Posts