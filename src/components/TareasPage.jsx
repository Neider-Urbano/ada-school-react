import React from "react";
import useTask from "../hooks/useTask";
const TareasPage = () => {
  const [states] = useTask();
  const { arrayTask, taskPending } = states;
  console.log(arrayTask);
  return (
    <div>
      <h1>Mis Tasks</h1>
      <div>
        <p className="d-inline mr-3">Id</p>
        <p className="d-inline mr-3">name</p>
        <p className="d-inline">Description</p>
      </div>
      {arrayTask.map((task, key) => {
        return (
          <div key={key}>
            <p className="d-inline mr-3">{task.id}</p>
            <p className="d-inline mr-3">{task.task.name}</p>
            <p className="d-inline">{task.task.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TareasPage;
