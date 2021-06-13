import React, { useState, useEffect, useMemo, useContext } from "react";
import './PostsContainer.css'
import Post from '../Post/Post'
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import {ThemeContext} from '../../context/ThemeContext'
import SwitchButton from '../Button/SwitchButton'

function PostsContainer() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [sliceCount, setSliceCount] = useState(5);

    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
            try {
                setLoading(true);
                fetch('http://jsonplaceholder.typicode.com/posts?_expand=user')
                .then(response => response.json())
                .then(result => setPosts(result))
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(err)
            }
    }, [])

    const showMorePosts = () => {
        setSliceCount(sliceCount + 5);
    }

    const memoPosts = useMemo(() => {
       return posts.slice(0, sliceCount);
    }, [posts, sliceCount]);

    if (loading) {
        return <Loader/>
    }
    if (!loading && error) {
        return <Error/>
    }

    return (
        <div className={theme === 'light' ? 'posts-container light' : 'posts-container dark'}>
            <div className="header">
                <h3 className='header-title'>Posts App</h3>
                <div className='switch-button'>
                    <SwitchButton changeTheme={toggleTheme}/>
                </div>
            </div>
            <div className='posts'>
            {memoPosts.map((item) => {
                return (
                    <div className='post-item' key={item.id}>
                        <Post title={item.title} text={item.body} user={item.user} id={item.id}/>
                    </div>
                )
                })}
            </div>
            <div className="footer">
                <button className='footer-button' onClick={showMorePosts}>Show More</button>
            </div>
        </div>
    )
}

export default PostsContainer;