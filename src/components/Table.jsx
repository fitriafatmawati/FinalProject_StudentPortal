import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Button,
} from "@chakra-ui/react";

const TableCustom = (props) => {
  const [filter, setFilter] = useState(props.filter);
  const students = props.students;

  const handleDelete = async (id) => {
    let message = {
      message: `Successfully deleted student data with id ${id}`,
    };
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      props.onUpdateStudent(true);

      return message;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    setFilter(props.filter);
  }, [props.filter]);

  return (
    <TableContainer boxShadow="lg" rounded="md" m={"5"}>
      <Table id="table-student" colorScheme="blackAlpha" variant={"striped"}>
        <Thead className="table-head" bg={"#82DBD8"}>
          <Tr>
            <Th textColor={"light"}>No</Th>
            <Th textColor={"light"}>Full Name</Th>
            <Th textColor={"light"}>Birth Date</Th>
            <Th textColor={"light"}>Gender</Th>
            <Th textColor={"light"}>Faculty</Th>
            <Th textColor={"light"}>Program Study</Th>
            <Th textColor={"light"}>Option</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students && students.length > 0 ? (
            students
              .filter(
                (student) => filter === "All" || student.faculty === filter
              )
              .map((student, index) => (
                <Tr key={index} className="student-data-row">
                  <Td className="no-cell">{index + 1}</Td>
                  <Td>
                    <Link to={`/student/${student.id}`}>
                      {student.fullname}
                    </Link>
                  </Td>
                  <Td>{student.birthDate}</Td>
                  <Td>{student.gender}</Td>
                  <Td>{student.faculty}</Td>
                  <Td>{student.programStudy}</Td>
                  <Td>
                    <Button
                      className="delete-btn"
                      data-testid={`delete-${student.id}`}
                      onClick={() => handleDelete(student.id)}
                      bg={"#FEA1BF"}
                      color={"light"}
                      _hover={{ bg: "#F56EB3" }}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))
          ) : (
            <Tr>
              <Td colSpan="7">No Students</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableCustom;
