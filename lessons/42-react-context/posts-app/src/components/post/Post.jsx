import React, { useState } from 'react';
import './Post.css'
import Modal from '../Modal/Modal'


function Post({title, text, user}) {
    const [isOpen, setIsOpen] = useState(false);
    
    const onClickPost = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <>
        <div className="post">
            <div className='post-title'>{title}</div>
            <div className='post-text'>{text}</div>
            <div className='post-author' onClick={onClickPost}>Author: <span className='post-author-name'>{user.name}</span></div>
        </div>
        <Modal author={user} open={isOpen} close={handleClose}/>
        </>
    )
}

export default Post;