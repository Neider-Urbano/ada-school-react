import Header from "./Header";
import ButtonDanger from "./ButtonDanger";
import AddTask from "./addTask";
import TaskList from "./TaskList";
import useTask from "../hooks/useTask";
import { Card } from "@chakra-ui/react";

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

  return (
    <Card className="containerTask p-4">
      <Header />
      <AddTask onClickAdd={handleClickAdd} />
      <TaskList
        onClickDelete={handleClickDelete}
        onClickRadio={handleClickRadio}
        arrayTask={arrayTask}
        onClickUpdate={handleClickUpdate}
      />
      <ButtonDanger onClickClear={handleClickClear} taskPending={taskPending} />
    </Card>
  );
};

export default MainDiv;
