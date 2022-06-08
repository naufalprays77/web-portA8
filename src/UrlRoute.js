import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TodoListView from './ToDoList/TodoListView';
import Calculator from './Calculator/Calculator';
import TodoEdit from './ToDoList/TodoEdit';
import Home from './Home';
import Footer from './Components/Footer';

function Url() {
  return (
    <div className="app ">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/ToDoList" element={<TodoListView />} />
        <Route path="/ToDoList/Edit" element={<TodoEdit />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Url;
