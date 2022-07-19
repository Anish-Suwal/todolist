import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck, FaTimes, FaEdit } from "react-icons/fa";
import moment from "moment";
const Todo = ({ id, completed, text, todo, todos, setTodos }) => {
  //events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    // console.log(todo);
  };
  const editHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            text: " HI",
          };
        }
        return item;
      })
    );
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
    <>
      <tr>
        <td>{moment(id).format("L")}</td>
        <td className={`todo-item $(todo.completed ? "completed": "")`}>
          {text}
        </td>
        <td>
          <button onClick={completeHandler} className="complete-btn">
            {completed ? (
              <FaCheck size={18} />
            ) : (
              <FaTimes size={18} color="red" />
            )}
            {/*  */}
          </button>
        </td>
        <td>
          <button onClick={editHandler} className="edit-btn">
            <FaEdit size={18} />
          </button>
        </td>
        <td>
          <button onClick={deleteHandler} className="trash-btn">
            <FaTrashAlt size={23} />
          </button>
        </td>
      </tr>

      {/* <li>{moment(id).format("L")}</li>
      <li className={`todo-item $(todo.completed ? "completed": "")`}>
        {text}
      </li> */}
    </>
  );
};

export default Todo;
