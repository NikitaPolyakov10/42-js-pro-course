import React from 'react'
import './Modal.css'

function Modal({title,city,street,suite,email,phone, active, setActive}) {

    return(
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-title'>{title}</div>
                <div className='modal-address'>Address:&nbsp; 
                    <span>{city},&nbsp;</span>
                    <span>{street},&nbsp;</span>
                    <span>{suite}</span>
                </div>
                <span className='modal-email'>Email:&nbsp;{email}&nbsp;</span>
                <span className='modal-phone'>Phone:&nbsp;{phone}</span>
                <button className='modal-button' onClick={() => setActive(false)}>Close</button>
            </div>
        </div>
    )
}

export default Modal;