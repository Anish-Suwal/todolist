import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { BsCheckCircle } from "react-icons/bs";
const Todo = ({ id, text, todo, todos, setTodos }) => {
  //events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    // console.log(todo);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li>{id}</li>
      <li className={`todo-item $(todo.completed ? "completed": "")`}>
        {text}
      </li>

      <button onClick={completeHandler} className="complete-btn">
        <BsCheckCircle size={18} />
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <TiDeleteOutline size={23} />
      </button>
    </div>
  );
};

export default Todo;
