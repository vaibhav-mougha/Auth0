import { Heading } from "@chakra-ui/react";
import React from "react";
import Nav from "./Components/Navbar";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <>
      <Nav />
      <Heading mt={"3rem"} color={"#6C00F7"} textAlign={"center"} fontSize={"3.7rem"}>
              Welcome to Arcade Profusion Auth for Social Apps
            </Heading>
      <UserDetails />
    </>
  );
}

export default App;
