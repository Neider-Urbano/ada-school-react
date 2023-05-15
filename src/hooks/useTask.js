import { useState, useEffect } from "react";

const useTask = () => {
  const [arrayTask, setArrayTask] = useState([
    {
      id: 1,
      task: { name: "ejemplo 1", description: "para ada-school" },
      state: true,
    },
  ]);
  const [taskPending, setTaskPending] = useState(arrayTask.length);
  const miStorage = window.localStorage;

  useEffect(() => {
    var dataTasks = JSON.parse(miStorage.getItem("dataTasks"));
    if (dataTasks?.length > 0) {
      setArrayTask(dataTasks);
      let cantidadPending = 0;
      dataTasks?.map((task) => {
        if (task.state == false) {
          cantidadPending++;
        }
      });
      setTaskPending(cantidadPending);
    } else {
      miStorage.setItem("dataTasks", JSON.stringify(arrayTask));
    }
  }, [taskPending]);

  const handleClickClear = () => {
    if (arrayTask.length > 0) {
      miStorage.clear();
      setTaskPending(0);
      setArrayTask([]);
    }
  };

  const handleClickDelete = (id) => {
    var dataTasks = JSON.parse(miStorage.getItem("dataTasks"));
    let deleteTask = dataTasks.filter((task) => task.id != id);
    miStorage.setItem("dataTasks", JSON.stringify(deleteTask));
    setArrayTask(deleteTask);
    setTaskPending(taskPending - 1);
  };

  const handleClickRadio = (boolean, idTask) => {
    var dataTasks = JSON.parse(miStorage.getItem("dataTasks"));
    let updateTask = dataTasks.map((task) => {
      if (task.id == idTask) {
        task.state = boolean;
      }
      return task;
    });
    miStorage.setItem("dataTasks", JSON.stringify(updateTask));
    if (boolean) setTaskPending(taskPending - 1);
    else setTaskPending(taskPending + 1);
  };

  const handleClickUpdate = (dataUpdateTask) => {
    miStorage.setItem("dataTasks", JSON.stringify(dataUpdateTask));
    setTaskPending(null);
  };

  const handleClickAdd = (dataNewTask) => {
    if (dataNewTask.name.length > 0) {
      if (dataNewTask.name.length > 3) {
        var dataTasks = (dataTasks = JSON.parse(
          miStorage.getItem("dataTasks")
        ));
        if (dataTasks) {
          dataTasks.push({
            id: Math.max(...dataTasks.map((task) => task.id)) + 1,
            task: dataNewTask,
            state: false,
          });
        } else {
          dataTasks = [];
          dataTasks.push({ id: 1, task: dataNewTask, state: false });
        }
        miStorage.setItem("dataTasks", JSON.stringify(dataTasks));
        setTaskPending(taskPending + 1);
      } else {
        alert("la tarea debe tener al menos tres caracteres");
      }
    } else {
      alert("escribe alguna tarea");
    }
  };
  return [
    {
      arrayTask,
      taskPending,
    },
    {
      handleClickClear,
      handleClickDelete,
      handleClickRadio,
      handleClickUpdate,
      handleClickAdd,
    },
  ];
};

export default useTask;
