import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <>
      <Flex bg={"#F8F9FE"} justifyContent={"space-between"} p={"1.2rem 4rem"}>
        <Text color={"#FFFFFF"} bg={"black"} p={"0.5rem"} h={"2.7rem"}>
          Arcade Profusion
        </Text>
        <Flex
          justifyContent={"space-around"}
          alignContent={"center"}
          //   border={"1px solid black"}
          color={"gray"}
        >
          <Text p={"1rem"}>HOME</Text>
          <Text p={"1rem"}>ABOUT</Text>
          <Text p={"1rem"}>SERVICES</Text>
          <Text p={"1rem"}>CONTACT</Text>
          <LoginButton />
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
