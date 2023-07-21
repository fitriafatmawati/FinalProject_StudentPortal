import { useEffect, useState } from "react";
import TableCustom from "../components/Table";
import { Box, Select, Heading, Grid } from "@chakra-ui/react";
import Footer from "../components/Footer";
// TODO: answer here

const Student = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [filter, setFilter] = useState("All");

  const fetchStudents = () => {
    fetch("http://localhost:3001/student")
      .then((response) => response.json())
      .then((result) => {
        setStudents(result);
        setIsLoading(false);
        setIsUpdate(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleUpdate = (bool) => {
    setIsUpdate(bool);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchStudents();
  }, [isUpdate]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Box w={"full"}>
      <Grid gap={3} px={"16"} py={"20"}>
        <Heading color={"#2F8F9D"}>All Student</Heading>
        <Select
          name=""
          id=""
          data-testid="filter"
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
          <option value="Fakultas Ilmu Sosial dan Politik">
            Fakultas Ilmu Sosial dan Politik
          </option>
          <option value="Fakultas Teknik">Fakultas Teknik</option>
          <option value="Fakultas Teknologi Informasi dan Sains">
            Fakultas Teknologi Informasi dan Sains
          </option>
        </Select>
        {isLoading === true ? (
          <p>Loading ...</p>
        ) : (
          <TableCustom
            onUpdateStudent={handleUpdate}
            students={students}
            filter={filter}
          ></TableCustom>
        )}
      </Grid>

      <Footer bottom={0} />
    </Box>
  );
};

export default Student;
