import { useNavigate } from "react-router-dom";
import { Flex, Box, Button, Heading } from "@chakra-ui/react";
// TODO: answer here

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box h={"full"} bg={"#B3E8E5"}>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        h="100vh"
        flexDir={"column"}
      >
        <Heading mb={"5"}>404 | Not Found</Heading>
        <Button
          data-testid="back"
          onClick={() => navigate(-1)}
          bg={"#3BACB6"}
          color={"light"}
        >
          Back
        </Button>
      </Flex>
    </Box>
    // <Box>

    // </Box>
  );
};

export default NotFound;
