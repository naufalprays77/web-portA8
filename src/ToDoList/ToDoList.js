import React, { useEffect, useState } from 'react';
import HeadTodo from './HeadTodo';
import Form from './Form';
import { DisplayToDo } from './DisplayToDo';

const ToDoList = () => {
  const initialState = JSON.parse(localStorage.getItem('todo')) || [];
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="container bg-todo w-[100%] md:min-h-[100vh] flex justify-center items-center">
      <div className="bg-[#cbcbcb2d] md:w-[500px] w-[100%] min-h-[600px] p-[20px] box-border md:rounded-md shadow-sm md:mb-[10px] pb-[100px]">
        <div>
          <HeadTodo />
        </div>
        <div>
          <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo} editTodo={editTodo} setEditTodo={setEditTodo} />
        </div>
        <div>
          <DisplayToDo todo={todo} setTodo={setTodo} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
