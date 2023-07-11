import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const UserDetails = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && (
        <>
          <Box
            m={"auto"}
            mt={"5rem"}
            textAlign={"center"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            p={"2rem"}
            w={"50%"}
            borderRadius={"2rem"}
          >
            <Heading color={"#6C00F7"} textDecoration={"underline"}>
              User Details
            </Heading>
            <Flex justifyContent={"center"} alignContent={"center"}>
              <Text p={"1rem"} fontWeight={"bold"}>
                User Name :{" "}
              </Text>
              <Text p={"1rem"}>{user.name}</Text>
            </Flex>

            <Image
              src={user.picture}
              alt={user.name}
              borderRadius={"50%"}
              borderColor={"#6C00F7"}
              border={"4px solid #6C00F7"}
              m={"auto"}
            />

            <Flex justifyContent={"center"} alignContent={"center"}>
              <Text p={"1rem"} fontWeight={"bold"}>
                User Email :{" "}
              </Text>
              <Text p={"1rem"}>{user.email}</Text>
            </Flex>
          </Box>
        </>
      )}
    </>
  );
};

export default UserDetails;
