import React from 'react'
import './Modal.css'
function Modal({ setModal, onDelete, curId }) {
  return (
    <div onClick={(e) => {
      if (e.target.classList[0] === 'popup')
        setModal(false);
    }
    } className='popup'>
      <div className='modalwin'>
        <p style={{ color: "teal" }}>Are you sure you want to delete?</p>
        <button className='btn' onClick={() => {
          onDelete(curId);
          setModal(false);
        }}> Yes </button>
        <button className='btn' onClick={() => setModal(false)}> No </button>
      </div>
    </div>
  )
}

export default Modal