import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>OOPS...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page does not exist"
            : "An Unexpected Error Occured..."}
        </Text>
      </Box>
    </>
  );
};
