import { Container } from "@chakra-ui/react";
import * as React from "react";
import { Navbar } from "../navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
