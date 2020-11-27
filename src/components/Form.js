import React from "react";

const Form = (props) => {
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (props.inputText)
      props.setTodos([
        ...props.todos,
        {
          id: Math.floor(Math.random() * 10000 + 1),
          text: props.inputText,
          completed: false,
        },
      ]);

    props.setInputText("");
  };

  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
