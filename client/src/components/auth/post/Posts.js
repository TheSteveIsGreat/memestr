import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Posts = () => {
  const [posts, setPosts] = useState([])

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
  
  
  
  
  
  return (
  
  <>
  <h1>Posts</h1>
  <p>{JSON.stringify(posts)}</p>
  </>)
}

export default Posts