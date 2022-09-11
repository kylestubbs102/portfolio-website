import { Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />
      <Container minW={"100%"} pt="60px">{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
