import React from "react";
import { useState } from "react";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([""]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
    // event.preventDefault();
    const newToDoList = [...toDoList, newTask];

    setToDoList(newToDoList);
    console.log(newTask);
    console.log(toDoList);
  };
  return (
    <>
      <input
        className="form-control form-control-sm"
        type="text"
        placeholder="Enter new task"
        aria-label="Enter new task"
        onChange={handleChange}
      ></input>
      <button type="button" onClick={addTask} className="">
        Add new task
      </button>

      <ul className="list-group">
        {toDoList.map((item, index) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
};
export default ToDoList;
