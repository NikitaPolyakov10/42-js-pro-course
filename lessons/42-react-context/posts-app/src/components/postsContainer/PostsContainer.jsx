import React, { useState, useEffect, useMemo } from "react";
import './PostsContainer.css'
import Post from '../post/Post'
import SwitchButton from '../switchButton/SwitchButton'
import CircularIndeterminate from '../loader/Loader';
import Container from '@material-ui/core/Container';
import { Button, Grid, Typography } from "@material-ui/core";

function PostsContainer() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [sliceCount, setSliceCount] = useState(4);

    useEffect(() => {
        const getPosts = async () => {
            try {
                setLoading(true);
                const fetchData = await fetch('http://jsonplaceholder.typicode.com/posts?_expand=user');
                const response = await fetchData.json();
                setPosts(response)
                setLoading(false);
            } catch (e) {
                setLoading(false);
                setError(e?.message || e)
            }
        }
        getPosts();
    }, [])

    const showMorePosts = () => {
        setSliceCount(sliceCount + 4);
    }

    const memoPosts = useMemo(() => {
       return posts.slice(0, sliceCount);
    }, [posts, sliceCount]);

    if (loading) {
        return <CircularIndeterminate/>
    }
    if (!loading && error) {
        return <div><h4 style={{ color: 'red', textAlign: 'center' }}>Error fetch data. Please try again later.</h4></div>
    }

    return (
        <Container maxWidth="xl">
            <div className="header">
                <Typography variant='h3'>Posts App</Typography>
                <div className='switch-buttons'><SwitchButton /></div>
            </div>
            <div className='posts-container'>
                <Grid container spacing={1}>
                    {memoPosts.map((item) => {
                        return (
                            <Grid item xs={6} key={item.id}>
                                <Post title={item.title} text={item.body} user={item.user} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
            <div className="footer">
                <Button variant="contained" color="primary" onClick={showMorePosts}>Show More</Button>
            </div>
        </Container>
    )
}

export default PostsContainer;