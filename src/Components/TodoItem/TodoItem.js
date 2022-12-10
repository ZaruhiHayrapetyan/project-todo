import React from 'react'
import './TodoItem.css'

function TodoItem({ curId, setCurId, modal, setModal, todo, toggleTodo, className }) {

  function handleClick() {
    toggleTodo(todo.id)
  }

  return (

    <div className={className} >
      <input className='inptodo' type="checkbox" checked={todo.completed} onChange={handleClick} />
      <p className='ptag'>{todo.name}</p>

      <button className='delete' onClick={() => { setModal(true); setCurId(todo.id); }}>X</button>
    </div>
  )
}

export default TodoItem