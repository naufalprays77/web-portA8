import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';

function BtnToDoList() {
  return (
    <div className="self-center items-center justify-center bg-transparent text-white right-28 relative hover:bg-black py-4 px-8 rounded-full cursor-pointer">
      <Link to="/ToDoList" className="top-1/2">
        <FiArrowRightCircle className="left-9 relative" /> <h1 className="pt-3">Go ToDoList</h1>
      </Link>
    </div>
  );
}

export default BtnToDoList;
