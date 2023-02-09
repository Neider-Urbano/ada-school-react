import { useState } from "react";

export const Modal = ({ dataTask, onClickUpdate }) => {
  const miStorage = window.localStorage;
  var dataTasks = JSON.parse(miStorage.getItem("dataTasks"));

  const [valueInput, setValueInput] = useState(dataTask.task);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValueInput({ ...valueInput, [name]: value });
  };

  const handleChangeClose = () => {
    setValueInput(dataTask.task);
  };

  const handleChangeSave = () => {
    if (
      valueInput.name !== "" &&
      valueInput.name !== 0 &&
      valueInput.name.length > 3
    ) {
      var newList = [];
      dataTasks.map((task) => {
        if (task.id == dataTask.id) {
          task.task.name = valueInput.name;
          task.task.description = valueInput.description;
        }
        newList.push(task);
      });
      onClickUpdate(newList);
    } else {
      setValueInput(dataTask.task);
    }
  };

  return (
    <div
      className="modal fade"
      id={`exampleModalCenter${dataTask.id}`}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Edit Name Task
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-3"
              name="name"
              placeholder="name task"
              value={valueInput.name}
              onChange={(e) => handleChangeInput(e)}
            />
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="description task"
              value={valueInput.description}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => handleChangeClose()}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={() => handleChangeSave()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
