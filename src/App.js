import { useEffect, useState } from "react";

import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

import "./App.css";

function App() {
  // const [taskList, setTaskList] = useState([
  //   {
  //     id: 1,
  //     name: "Task A",
  //     time: "2:09:01 AM 09/14/2030",
  //   },
  //   {
  //     id: 2,
  //     name: "Task B",
  //     time: "2:09:01 AM 09/14/2030",
  //   },
  //   {
  //     id: 3,
  //     name: "Task C",
  //     time: "2:09:01 AM 09/14/2030",
  //   },
  // ]);
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);
  const [task, setTask] = useState({});
  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
