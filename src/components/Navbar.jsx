import { Outlet } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";
import { Box, Link, Heading, Flex, Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box>
      <Flex
        px={4}
        py={3}
        bg={"#82DBD8"}
        textColor={"light"}
        justifyContent={"space-between"}
        pos={"fixed"}
        w={"full"}
        zIndex="sticky"
      >
        <Box>
          <Link as={ReachLink} data-testid="home-page" to={"/"}>
            <Heading as={"h1"} size={"lg"}>
              Student Portal
            </Heading>
          </Link>
        </Box>

        <Flex gap={4}>
          <Link as={ReachLink} data-testid="student-page" to={"/student"}>
            <Button>All Student</Button>
          </Link>
          <Link as={ReachLink} data-testid="add-page" to={"/add"}>
            <Button>Add Student</Button>
          </Link>
        </Flex>
      </Flex>
      <Box bg="gray.50">
        <Outlet />
      </Box>
    </Box>
  );
};

export default NavBar;
