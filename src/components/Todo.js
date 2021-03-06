import React from "react";

const Todo = (props) => {
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((t) => t.id !== Number(props.todo.id)));
  };

  const completeHandler = () => {
    props.setTodos(
      props.todos.map((t) => {
        if (t.id === Number(props.todo.id)) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.todo.text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
