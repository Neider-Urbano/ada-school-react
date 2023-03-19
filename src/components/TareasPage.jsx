import useTask from "../hooks/useTask";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const TareasPage = () => {
  const [states] = useTask();
  const { arrayTask, taskPending } = states;
  return (
    <div>
      <h1>Mis Tasks</h1>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arrayTask.map((task, key) => {
              return (
                <Tr key={key}>
                  <Td>{task.id}</Td>
                  <Td>{task.name}</Td>
                  <Td>{task.description}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Description</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TareasPage;
