import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Text } from "@chakra-ui/react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <>
          <Text p={"1rem"}>{user.name}</Text>
        </>
      )}
      {isAuthenticated ? (
        <Button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          bg={"#6C00F7"}
          color={"#FFFFFF"}
          m={"0.5rem"}
        >
          Log Out
        </Button>
      ) : (
        <Button
          onClick={() => loginWithRedirect()}
          bg={"#6C00F7"}
          color={"#FFFFFF"}
          m={"0.5rem"}
        >
          Log In
        </Button>
      )}
    </>
  );
};

export default LoginButton;
