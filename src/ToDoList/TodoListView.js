import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import BtnBackToMenu2 from '../Components/BtnBackToMenu2';
import BtnToCalculator from '../Components/BtnToCalculator';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <section id="ToDoList">
      <div className="container flex flex-row text-center bg-gradient-to-b from-[#161a2b] to-[#302b63] min-h-[85vh] pt-10 justify-center items-center">
        <BtnBackToMenu2 />

        <div className="bg-[#161a2b] w-[40%] p-4">
          <div className="p-4 text-[30px] text-white">
            <h1>What's the Plan for Today?</h1>
          </div>
          <TodoForm onSubmit={addTodo} />
          <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
        <BtnToCalculator />
      </div>
      {/* </div> */}
    </section>
  );
}

export default TodoList;
