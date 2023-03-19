import Task from "./Task";
import PropTypes from "prop-types";
import TaskClass from "../models/task/data.class";

const TaskList = ({
  onClickDelete,
  onClickRadio,
  arrayTask,
  onClickUpdate,
}) => {
  return (
    <div>
      {arrayTask.length > 0 &&
        arrayTask.map((task, key) => {
          const taskObj = new TaskClass(
            1,
            task.name,
            task.description,
            task.state
          );
          return (
            <Task
              key={task.id}
              dataTask={taskObj}
              onClickDelete={onClickDelete}
              onClickRadio={onClickRadio}
              onClickUpdate={onClickUpdate}
            />
          );
        })}
    </div>
  );
};
TaskList.propTypes = {
  onClickDelete: PropTypes.func.isRequired,
  onClickRadio: PropTypes.func.isRequired,
  arrayTask: PropTypes.array.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
};
export default TaskList;
