import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";  

const PostDetails = () => {
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([])
    const { postId } = useParams();
  
    useEffect(() => {
      fetch(`http://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((resp) => resp.json())
        .then((res) => setComment(res));
    }, [postId])
    
    useEffect(() => {
      fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((resp) => resp.json())
        .then((res) => setPost(res));
    }, [postId])
    return (
      <>
      <div>
        <h2>Post Details</h2>
        <h3>{post.title}</h3>
        <div>{post.body}</div>
      </div>
      <div>
      <h2>Post Comments</h2>
        {comment.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <div>{item.email}</div>
              <div>{item.body}</div>
            </div>
          )
        })}

      </div>
      </>
    ) 
  }

  export default PostDetails;