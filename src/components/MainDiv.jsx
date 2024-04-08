import Header from "./Header";
import ButtonDanger from "./ButtonDanger";
import AddTask from "./addTask";
import TaskList from "./TaskList";
import useTask from "../hooks/useTask";
import { Card } from "@chakra-ui/react";
import { createRef } from "react";

const MainDiv = () => {
  const [states, actions] = useTask();
  const { arrayTask, taskPending } = states;
  const {
    handleClickAdd,
    handleClickClear,
    handleClickDelete,
    handleClickRadio,
    handleClickUpdate,
  } = actions;

  const inputRef = createRef();

  const clickHandlerRef = (status) => {
    let text = "";
    if (status) text = " - Registra una nueva tarea";
    inputRef.current.innerText = text;
  };

  return (
    <Card className="containerTask p-4">
      <Header ref={inputRef} />
      <AddTask onClickAdd={handleClickAdd} clickHandlerRef={clickHandlerRef} />
      <TaskList
        onClickDelete={handleClickDelete}
        onClickRadio={handleClickRadio}
        arrayTask={arrayTask}
        onClickUpdate={handleClickUpdate}
      />
      <ButtonDanger
        onClickClear={handleClickClear}
        taskPending={taskPending || 0}
        clickHandlerRef={clickHandlerRef}
      />
    </Card>
  );
};

export default MainDiv;
