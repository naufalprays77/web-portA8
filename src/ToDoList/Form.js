import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todo, setTodo, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todo.map((todo) => (todo.id === id ? { title, id, completed } : todo));
    setTodo(newTodo);
    setEditTodo('');
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput('');
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="Enter a Todo..." className="outline-none w-[70%] h-[60px] p-[10px] md:mr-[15px] mr-[10px] text-[15px] text-[#d9d9d9] bg-[#1f1f1f] rounded-lg" value={input} onChange={onInputChange} required />
      <button className=" w-[25%] p-[10px] text-[15px] text-white hover:bg-[#1D536C] rounded-lg border-0 bg-[#1F1F1F] h-[60px] cursor-pointer" type="submit">
        {editTodo ? 'OK' : 'Add'}
      </button>
    </form>
  );
};

export default Form;
