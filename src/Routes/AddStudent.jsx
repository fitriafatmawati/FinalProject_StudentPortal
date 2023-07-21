import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Button,
  Input,
  Select,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const AddStudent = () => {
  const [student, setStudent] = useState({});
  const [faculty, setFaculty] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      [event.target.id]: event.target.value,
    }));
  };

  const {
    "input-name": fullname,
    "input-profilePict": profilePicture,
    "input-address": address,
    "input-phone": phoneNumber,
    "input-date": birthDate,
    "input-gender": gender,
    "input-prody": programStudy,
  } = student;

  useEffect(() => {
    if (
      programStudy === "Ekonomi" ||
      programStudy === "Manajemen" ||
      programStudy === "Akuntansi"
    ) {
      setFaculty("Fakultas Ekonomi");
    } else if (
      programStudy === "Administrasi Publik" ||
      programStudy === "Administrasi Bisnis" ||
      programStudy === "Hubungan Internasional"
    ) {
      setFaculty("Fakultas Ilmu Sosial dan Politik");
    } else if (
      programStudy === "Teknik Sipil" ||
      programStudy === "Arsitektur"
    ) {
      setFaculty("Fakultas Teknik");
    } else {
      setFaculty("Fakultas Teknologi Informasi dan Sains");
    }
  }, [programStudy]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const studentData = {
      fullname: fullname,
      profilePicture: profilePicture,
      address: address,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
      gender: gender,
      faculty: faculty,
      programStudy: programStudy,
    };

    try {
      await insertStudentData(studentData);
      setStudent({});
      navigate("/student");
    } catch (error) {
      console.log("Failed to insert student data:", error);
    }
  };

  const insertStudentData = async (studentData) => {
    try {
      const response = await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Student data inserted successfully", responseData);
      } else {
        console.log("Failed to insert student data");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <Flex direction="column" minH="100vh">
      <Grid flex="1" px={"16"} py={"20"} gap={3}>
        <Heading color={"#2F8F9D"}>Add Student</Heading>
        <form action="" id="form-student" onSubmit={handleSubmit}>
          <Grid gap={2}>
            <div>
              <label htmlFor="input-name">Fullname</label>
              <Input
                type="text"
                id="input-name"
                data-testid="name"
                value={student["input-name"] || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="input-profilePict">Profile Picture</label>
              <Input
                type="text"
                id="input-profilePict"
                data-testid="profilePicture"
                value={student["input-profilePict"] || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="input-address">Address</label>
              <Input
                type="text"
                id="input-address"
                data-testid="address"
                value={student["input-address"] || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="input-address">Phone Number</label>
              <Input
                type="text"
                id="input-phone"
                data-testid="phoneNumber"
                value={student["input-phone"] || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="input-date">Birth Date</label>
              <Input
                type="date"
                id="input-date"
                data-testid="date"
                value={student["input-date"] || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="input-gender">Gender</label>
              <Select
                name=""
                id="input-gender"
                data-testid="gender"
                value={student["input-gender"] || ""}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </div>
            <div>
              <div>
                <label htmlFor="input-prody">Program Study</label>
                <Select
                  name=""
                  id="input-prody"
                  data-testid="prody"
                  value={student["input-prody"] || ""}
                  onChange={handleChange}
                >
                  <option value="Ekonomi">Ekonomi</option>
                  <option value="Manajemen">Manajemen</option>
                  <option value="Akuntansi">Akuntansi</option>
                  <option value="Administrasi Publik">
                    Administrasi Publik
                  </option>
                  <option value="Administrasi Bisnis">
                    Administrasi Bisnis
                  </option>
                  <option value="Hubungan Internasional">
                    Hubungan Internasional
                  </option>
                  <option value="Teknik Sipil">Teknik Sipil</option>
                  <option value="Arsitektur">Arsitektur</option>
                  <option value="Matematika">Matematika</option>
                  <option value="Fisika">Fisika</option>
                  <option value="Informatika">Informatika</option>
                </Select>
              </div>
              <Box my={"4"}>
                <Button
                  type="submit"
                  value="Add student"
                  id="add-btn"
                  data-testid="add-btn"
                  bg={"#3BACB6"}
                  color={"light"}
                >
                  Add Student
                </Button>
              </Box>
            </div>
          </Grid>
        </form>
      </Grid>

      <Footer bottom={0} />
    </Flex>
  );
};

export default AddStudent;
