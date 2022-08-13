import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
//For Update and Delete icons we are using react-icons
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  //  In function todo we are using useState to set the state of edit

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
    // In submitUpdate function we are updating the todo by passing the id and value to updateTodo function
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  // If edit.id is true then we are returning the TodoForm component else we are returning null

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      {/* If todo.isComplete is true then we are returning the complete class else we are returning null */}
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      {/*  We are using key to identify the todo */}
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        {/*  We are using onClick to remove the todo */}
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
        {/*  We are using onClick to set the edit state */}
      </div>
    </div>
  ));
}

export default Todo;
