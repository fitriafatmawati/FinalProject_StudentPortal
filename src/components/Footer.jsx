import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box className="footer" bg={"#82DBD8"} w={"full"} py={2}>
      <Flex justifyContent={"center"} gap={4}>
        <p className="studentName">Fitria Fatmawati</p>
        <p>-</p>
        <p className="studentId">FE5154326</p>
      </Flex>
    </Box>
  );
};

export default Footer;
