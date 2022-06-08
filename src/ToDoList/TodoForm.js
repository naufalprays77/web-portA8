import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      {props.edit ? (
        <>
          <input placeholder="Update your item" value={input} onChange={handleChange} name="text" ref={inputRef} className="w-[320px] bg-transparent text-white border-2 border-[#149fff] py-[14px] px-6 placeholder:text-[#e2e2e2]" />
          <button onClick={handleSubmit} className="bg-gradient-to-r from-[#149FFF] to-[#117AFF] py-4 px-6">
            Update
          </button>
        </>
      ) : (
        <>
          <input placeholder="Add your task" value={input} onChange={handleChange} name="text" ref={inputRef} className="w-[320px] bg-transparent text-white border-2 border-[#149fff] py-[14px] px-6 placeholder:text-[#e2e2e2]" />
          <button onClick={handleSubmit} className="bg-gradient-to-r from-[#149FFF] to-[#117AFF] py-4 px-6">
            Add Task
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
