import React, { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const NewPost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState(location.state ? location.state.title : "");
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (params.id) {
        await axios.put(`/api/posts/${e.target.value}`, {
          title,
          id: params.id,
        });
      } else {
        let res = await axios.post(`/api/posts`, { title });
        console.log("res.data:", res.data);
      }
      navigate("/posts");
    } catch (err) {
      alert("Error adding post");
    }
  };


  return (
    <div>
      <h1>{params.id ? "Edit" : "New"} Post</h1>
      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button className="button">{params.id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};


export default NewPost;