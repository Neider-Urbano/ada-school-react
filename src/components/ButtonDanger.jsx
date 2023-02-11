import { Button, Text } from "@chakra-ui/react";

const ButtonDanger = ({ onClickClear, taskPending }) => {
  return (
    <div className="buttonDanger">
      <Text>You have {taskPending} pending task</Text>
      <Button colorScheme="red" onClick={onClickClear}>
        Clear all
      </Button>
    </div>
  );
};

export default ButtonDanger;
