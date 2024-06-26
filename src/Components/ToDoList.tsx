import React from "react";
import { useState } from "react";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([""]);
  const [newTask, setNewTask] = useState("");
  const [newTaskFirstInit, setNewTaskFirstInit] = useState(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    // event.preventDefault();
    const newToDoList = [...toDoList, newTask];
    const newarr = newToDoList.filter((e, i) => e !== "");
    setToDoList(newarr);
    setNewTaskFirstInit(false);
    console.log(newTask);
    console.log(toDoList);
  };
  const deleteTask = (index: number) => {
    // event.preventDefault();

    const newarr = toDoList.filter((e, i) => i !== index);
    setToDoList(newarr);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 p-3">
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Enter new task"
            aria-label="Enter new task"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-4 p-3">
          <button
            type="button"
            onClick={addTask}
            className="btn btn-primary btn-sm form-control form-control-sm"
          >
            Add new task
          </button>
        </div>
      </div>
      <div className="">
        <div className="">
          <ul className="list-group">
            {newTaskFirstInit === true && <p>No items found</p>}

            {newTaskFirstInit === false &&
              toDoList.map((item, index) => (
                <>
                  <div className="row">
                    <div className="col-8 ">
                      <li className="list-group-item">{item}</li>
                    </div>
                    <div className="col-4 ">
                      <button
                        type="button"
                        onClick={() => deleteTask(index)}
                        className="btn btn-primary btn-sm"
                      >
                        Delete task
                      </button>
                    </div>
                  </div>
                </>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ToDoList;
