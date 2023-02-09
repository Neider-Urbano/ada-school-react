import React, { useState } from "react";

const initialState = {
  name: "",
  description: "",
};

const AddTask = ({ onClickAdd }) => {
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    onClickAdd(data);
    setData(initialState);
  };

  return (
    <form
      className="containerAddTask "
      onSubmit={(e) => {
        handleClick(e);
      }}
    >
      <input
        type="text"
        className="form-control mr-3"
        placeholder="escribe una nueva tarea *"
        name="name"
        value={data.name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="text"
        className="form-control"
        name="description"
        placeholder="escribe una descripcion"
        value={data.description}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button type="submit" className="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>
    </form>
  );
};

export default AddTask;
