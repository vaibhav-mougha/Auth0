import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Flex bg={"#F8F9FE"} justifyContent={"space-between"} p={"1.2rem 4rem"}>
        <Text color={"#FFFFFF"} bg={"black"} p={"0.5rem"}>
          Vaibhav Mougha
        </Text>
        <Flex
          justifyContent={"space-around"}
        //   border={"1px solid black"}
          color={"gray"}
        >
          <Text p={"1rem"}>HOME</Text>
          <Text p={"1rem"}>ABOUT</Text>
          <Text p={"1rem"}>SERVICES</Text>
          <Text p={"1rem"}>CONTACT</Text>
          <Button bg={"#6C00F7"} color={"#FFFFFF"} m={"0.5rem"}>
            LOG IN
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
