import React from 'react'
import './Modal.css'

const Modal = ({author,open, close}) => {
    return (
        <div className={open ? 'modal active' : 'modal'} onClick={close}>
        <div className='modal-content' onClick={(e) => {e.stopPropagation()}}>
            <div className='modal-author-name'>{author.name}</div>
            <div className='modal-author-address'>{`Address: ${author.address.city}, ${author.address.street}, ${author.address.suite}`}</div>
            <div className='modal-author-email'>{`Email: ${author.email}`}</div>
            <div className='modal-author-phone'>{`Phone: ${author.phone}`}</div>
            <div className='modal-author-company'>{`Company: ${author.company.name}`}</div>
            <div className='modal-footer'>
                <button className='modal-button' onClick={close}>Close</button>
            </div>
        </div>
    </div>

    )
}

export default Modal;