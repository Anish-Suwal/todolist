import React from "react";
import { CgAdd } from "react-icons/cg";
// import { FaSearch } from "react-icons/fa";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  inputTextSearch,
  setInputTextSearch,
}) => {
  //props setInputText
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();

    setTodos([{ text: inputText, completed: false, id: Date() }, ...todos]);
    //display whatever in todo by ...todo and new one
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const searchHandler = (e) => {
    setInputTextSearch(e.target.value);
    console.log(inputTextSearch);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        placeholder="Add Todo"
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <CgAdd background-color="#ffffff" />
        Add
      </button>
      <div className="container">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            onChange={searchHandler}
            value={inputTextSearch}
          />
          <button>S</button>
        </div>
        <div className="date">
          <input type="date" placeholder="Enter Date" />
        </div>

        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
