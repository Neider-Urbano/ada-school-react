import { useState, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormLabel,
  Input,
  FormControl,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

export const ModalCustom = ({ dataTask, onClickUpdate, isOpen, onClose }) => {
  const miStorage = window.localStorage;
  var dataTasks = JSON.parse(miStorage.getItem("dataTasks"));

  const initialRef = useRef(null);
  const finalRef = useRef(null);

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
    <div>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Name Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>name task</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                name="name"
                placeholder="name task"
                value={valueInput.name}
                onChange={(e) => handleChangeInput(e)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>description task</FormLabel>
              <Input
                type="text"
                name="description"
                placeholder="description task"
                value={valueInput.description}
                onChange={(e) => handleChangeInput(e)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleChangeSave()}
            >
              Save
            </Button>
            <Button
              onClick={() => {
                handleChangeClose();
                onClose();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
