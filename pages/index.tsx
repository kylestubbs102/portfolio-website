import { Divider, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/homepage/About";
import Introduction from "../components/homepage/Introduction";

const Home: NextPage = () => {
  const dividerColor = useColorModeValue("gray.300", "gray.800");

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Introduction />
      <Divider orientation="horizontal" bgColor={dividerColor} h={.2} />
      <About />
    </div>
  );
};

export default Home;
export { getServerSideProps } from "../lib/src/Chakra";
