import './App.css';
import React, { useState, useEffect } from 'react';
import TodoList from './Components/TodoList/TodoList';
import HideComponent from './Components/HideComponent/HideComponent';
import InputForm from './Components/InputForm/InputForm';
import Modal from './Components/Modal/Modal';

const KEY = "todos.key"

function App() {
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState(false);
  const [modal, setModal] = useState(false);
  const [curId, setCurId] = useState(-1);


  useEffect(() => {
    const myTodos = JSON.parse(localStorage.getItem(KEY));
    if (myTodos) {
      setTodos(myTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed;
    setTodos(newTodos)
  }

  function onDelete(todoID) {

    setTodos(todos.filter((t) => t.id !== todoID))
  }



  return (
    <div className="App">
      {todos.length > 0 ? <HideComponent active={active} setActive={setActive} todos={todos} /> : null}

      <InputForm
        todos={todos} setTodos={setTodos} />

      {todos.length === 0 ?
        <div className='main' ><p className='p1'>Your life is blank page. You write on it.</p><h1 className="h1">So  start by adding  your tasks here.</h1> </div>
        : null}

      {modal && <Modal curId={curId} onDelete={onDelete} modal={modal} setModal={setModal} />}

      <TodoList
        curId={curId}
        setCurId={setCurId}
        todos={todos}
        toggleTodo={toggleTodo}
        active={active}
        setActive={setActive}
        modal={modal}
        setModal={setModal} />
    </div>
  );
}

export default App;
