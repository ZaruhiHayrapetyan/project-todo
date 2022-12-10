import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

function TodoList({ curId, setCurId, todos, toggleTodo, active, setActive, modal, setModal }) {
  return (
    todos.map(todo => {
      return <TodoItem curId={curId} setCurId={setCurId} modal={modal} setModal={setModal} className={todo.completed ? (active ? 'todohidden' : 'todo todocompleted') : 'todo'} key={todo.id} todo={todo} toggleTodo={toggleTodo} active={active} setActive={setActive} />
    })
  )
}

export default TodoList