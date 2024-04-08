import { Button, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ButtonDanger = ({ onClickClear, taskPending, clickHandlerRef }) => {
  return (
    <div className="buttonDanger">
      <Text>You have {taskPending} pending task</Text>
      <Button
        colorScheme="red"
        onClick={() => {
          onClickClear();
          clickHandlerRef(true);
        }}
      >
        Clear all
      </Button>
    </div>
  );
};

//Cambiarle nombre a un componente

ButtonDanger.propTypes = {
  onClickClear: PropTypes.func.isRequired,
  taskPending: PropTypes.number.isRequired,
};

export default ButtonDanger;
