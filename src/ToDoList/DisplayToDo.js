import React from 'react';
import { FaCheck, FaEdit, FaTrashAlt } from 'react-icons/fa';

export const DisplayToDo = ({ todo, setTodo, setEditTodo }) => {
  const handleComplete = (todoItem) => {
    setTodo(
      todo.map((item) => {
        if (item.id === todoItem.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todo.find((todoItem) => todoItem.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodo(todo.filter((todoItem) => todoItem.id !== id));
  };
  return (
    <div className="mt-[50px]">
      {/* <h1 className="test">test CSS</h1> */}
      {todo.map((todoItem) => (
        <li className="flex my-[10px] mx-0 rounded-lg py-[5px] h-auto w-[100%] bg-[#1F1F1F] hover:bg-[#1D536C] " key={todoItem.id}>
          <div className={`w-[350px] px-5 py-2 border-none text-[15px] pl-[10px] rounded-md ${todoItem.completed ? 'decoration-solid line-through decoration-[#898989] opacity-60' : ''}`}>
            <p className="md:w-[200px] w-[100px] overflow-hidden text-white">{todoItem.title}</p>
          </div>
          <div className="flex ml-4 items-center ">
            <button className="border-none outline-none cursor-pointer bg-transparent text-[28px] rounded-[50%] text-[#5ae229] mr-[10px] task-button" onClick={() => handleComplete(todoItem)}>
              <FaCheck className="w-[15px]" />
            </button>
            <button className="border-none outline-none cursor-pointer bg-transparent text-[28px] rounded-[50%] text-[#e2e229] mr-[10px] task-button" onClick={() => handleEdit(todoItem)}>
              <FaEdit className="w-[15px]" />
            </button>
            <button className="border-none outline-none cursor-pointer bg-transparent text-[28px] rounded-[50%] text-[#e24229] mr-[10px] task-button" onClick={() => handleDelete(todoItem)}>
              <FaTrashAlt className="w-[15px]" />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
