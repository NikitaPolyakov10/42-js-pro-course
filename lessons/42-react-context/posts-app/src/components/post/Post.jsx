import React,{useCallback} from 'react'
import './Post.css'
import Modal from '../modal/Modal'

function Post({title, text, author, posts = []}) {
    const postClickCheck = () => {
        console.log('Post Click Check')
    }
    return(
        <div className='post' onClick={postClickCheck}>
            <div className="post-title">{title}</div>
            <div className="post-text">{text}</div>
            <div className='post-author'>Author: <span className='post-author-name'>{author}</span></div>
        </div>
    )
}

export default Post;