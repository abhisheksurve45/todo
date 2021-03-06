import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            id={todo.id}
            key={todo.id}
            todos={props.todos}
            setTodos={props.setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
