import { Link } from "react-router-dom";
import { Flex, Box, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box h={"full"} bg={"#B3E8E5"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        h="100vh"
        flexDir={"column"}
      >
        <Flex alignItems={"center"} justifyContent={"center"} h={"full"}>
          <Link to={"/student"}>
            <Button
              data-testid="student-btn"
              bg={"#3BACB6"}
              textColor={"light"}
            >
              All Student
            </Button>
          </Link>
        </Flex>

        <Footer />
      </Flex>
    </Box>
  );
};

export default Home;
