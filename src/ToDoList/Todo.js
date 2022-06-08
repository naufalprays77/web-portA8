import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'flex justify-between self-center my-1 mx-auto text-white w-[80%] p-4 border-5'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="flex justify-center text-[24px] cursor-pointer">
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="text-white mr-2" />
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="text-white" />
      </div>
    </div>
  ));
};

export default Todo;
