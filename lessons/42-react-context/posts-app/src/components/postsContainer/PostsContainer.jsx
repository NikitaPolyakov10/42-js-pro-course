import React, { useState, useEffect, useContext } from "react";
import './PostsContainer.css'
import Post from '../post/Post'
import SwitchesSize from '../switchButton/SwitchButton'
import Modal from '../modal/Modal'
import CircularIndeterminate from '../loader/Loader'

function PostsContainer() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [sliceCount, setSliceCount] = useState(5);
    const [modalActive, setModalActive] =useState(false)

    useEffect(() => {
        const getPosts = async () => {
            try{
                setLoading(true);
                const fetchData = await fetch('http://jsonplaceholder.typicode.com/posts?_expand=user');
                const response = await fetchData.json();
                setPosts(response)
                setLoading(false);
            } catch(e) {
                setLoading(false);
                setError(e?.message || e)
            }
        }
        getPosts();
    }, [])

    const showMorePosts = () => {
        setSliceCount(sliceCount + 5);
    }

    if (loading) {
        return <CircularIndeterminate/>
      }
      if (!loading && error) {
        return <div><h4 style={{ color: 'red' }}>Error fetch data. Please try again later.</h4></div>
      }

    return(
        <>
        <div className='switch-buttons'><SwitchesSize/></div>
        <div className='posts-container'>
            {posts.slice(0, sliceCount).map((item) => {
                return (
                    <div key={item.id}>
                    <Post title={item.title} text={item.body} author={item.user.name} onClick={() => setModalActive(true)}/>
                    <Modal title={item.user.name} city={item.user.address.city} street={item.user.address.street}
                    suite={item.user.address.suite} email={item.user.email} phone={item.user.phone} active={modalActive} 
                    setActive={setModalActive}/>
                    </div>
                )
            })}
        </div>
        <button onClick={() => setModalActive(true)}>Modal</button>
        <button className='button' onClick={showMorePosts}>Show More</button>
        </>
    )
}

export default PostsContainer;