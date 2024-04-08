import { useState } from "react";
import { Button, useDisclosure, Card } from "@chakra-ui/react";
import ModalCustom from "./ModalCustom";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import TaskClass from "../models/task/data.class";

const Task = ({ dataTask, onClickDelete, onClickRadio, onClickUpdate }) => {
  const [active, setActive] = useState(dataTask.state);
  const { name } = dataTask;
  const { id } = dataTask;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    if (active) onClickRadio(false, id);
    else onClickRadio(true, id);
    setActive(!active);
  };
  return (
    <Card>
      <div className="containerCardTask">
        <div className="form-check" onClick={() => handleClick()}>
          <input
            className="form-check-input"
            type="radio"
            id={name + id}
            checked={active}
            onChange={(e) => null}
          />
          <label
            className={`form-check-label ${active && "active"}`}
            htmlFor={name + id}
          >
            {name}
          </label>
        </div>
        <div className="div-buttons">
          <button onClick={() => onClickDelete(id)} className="mr-3">
            <DeleteIcon boxSize={4} />
          </button>
          <Button onClick={onOpen}>
            <EditIcon boxSize={4} />
          </Button>
          <ModalCustom
            dataTask={dataTask}
            onClickUpdate={onClickUpdate}
            isOpen={isOpen}
            onClose={onClose}
          />
        </div>
      </div>
    </Card>
  );
};

Task.propTypes = {
  dataTask: PropTypes.instanceOf(TaskClass),
  onClickDelete: PropTypes.func.isRequired,
  onClickRadio: PropTypes.func.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
};

export default Task;
