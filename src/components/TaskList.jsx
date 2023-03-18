import Task from "./Task";
import PropTypes from "prop-types";

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
          return (
            <Task
              key={task.id}
              dataTask={task}
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
