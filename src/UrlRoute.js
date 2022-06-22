import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ToDoList from './ToDoList/ToDoList';

function Url() {
  return (
    <div className="app ">
      <Routes>
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </div>
  );
}

export default Url;
