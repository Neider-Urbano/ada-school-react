import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const initialState = {
  name: "",
  description: "",
};

const AddTask = ({ onClickAdd, clickHandlerRef }) => {
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    clickHandlerRef(false);
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
      <Input
        type="text"
        className="mr-3"
        placeholder="escribe una nueva tarea *"
        name="name"
        value={data.name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Input
        type="text"
        name="description"
        placeholder="escribe una descripcion"
        value={data.description}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Button colorScheme="blue" type="submit">
        <AddIcon boxSize={4} />
      </Button>
    </form>
  );
};

AddTask.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
  clickHandlerRef: PropTypes.func.isRequired,
};

export default AddTask;
