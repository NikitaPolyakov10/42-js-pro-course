import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";  
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const PostDetails = () => {
    const [data, setData] = useState({});
    const dataComments = data.comments || [];
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { postId } = useParams();
  
    useEffect(() => {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_embed=comments`)
        .then((resp) => resp.json())
        .then((res) => setData(res))
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [postId])

    if(loading) {
      return <Loader/>
    }

    if(error) {
      return <Error/>
    }

    return (
      <>
      <div>
        <h2>Post Details</h2>
        <h3>{data.title}</h3>
        <div>{data.body}</div>
      </div>
      <div>
      <h2>Post Comments</h2>
        {dataComments.map((item) => {
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