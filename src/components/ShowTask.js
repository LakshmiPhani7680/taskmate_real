// import { useState } from "react";

export default function ShowTask({
  taskList: tasks,
  setTaskList: setTasks,
  task,
  setTask,
}) {
  const handleDelete = (id) => {
    const updatedTaskList = tasks.filter((task) => id !== task.id);
    setTasks(updatedTaskList);
  };
  const handleEdit = (id) => {
    const selectedTask = tasks.find((task) => task.id === id);
    setTask(selectedTask);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasks.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasks([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasks &&
          tasks.map((task) => (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              <i
                onClick={() => handleEdit(task.id)}
                className="bi bi-pencil-square"
              ></i>
              <i
                onClick={() => handleDelete(task.id)}
                className="bi bi-trash"
              ></i>
            </li>
          ))}
      </ul>
    </section>
  );
}
