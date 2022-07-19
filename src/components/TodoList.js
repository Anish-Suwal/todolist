import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <table id="todolist-table">
        <tr>
          <th>Date</th>
          <th>List</th>
          <th> </th>
          <th>Action </th>
          <th> </th>
        </tr>

        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            id={todo.id}
            completed={todo.completed}
            todo={todo}
          />
        ))}
      </table>
    </div>
  );
};

export default TodoList;
