import { Flex, Heading, Show } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../lib/lotties/code-animation.json";

function Introduction() {
  return (
    <Flex
      flexDir={"row"}
      minW={"100%"}
      minH={"100vh"}
      align={"center"}
      justify={"space-evenly"}
      py={100}
      gap={{ base: 0, lg: 30 }}
    >
      <Flex flexDir={"column"} justify="center">
        <Heading fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}>
          Hello,
        </Heading>
        <Flex flexDir={"row"} textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}>
            I&apos;m&nbsp;
          </Heading>
          <Heading
            color="green.400"
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
          >
            Kyle Stubbs
          </Heading>
        </Flex>
        <Heading fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}>
          Android developer
        </Heading>
      </Flex>
      <Show above={"lg"}>
        <Player
          autoplay
          loop
          src={animationData}
          style={{ height: "100%", width: "300px" }}
        />
      </Show>
    </Flex>
  );
}

export default Introduction;
