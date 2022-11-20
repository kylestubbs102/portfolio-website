import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { SKILL_BOX_ITEMS } from "../../lib/data/SkillBoxData";
import ProfilePicNormal from "../../lib/images/ProfilePicNormal.jpg";
import SkillBox from "../common/SkillBox";

function About() {
  return (
    <>
      <Heading
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
        textAlign={"center"}
        mt={"100px"}
      >
        About me
      </Heading>
      <Flex
        justify={"space-between"}
        align={"center"}
        flexDir={"row"}
        gap={"100px"}
        px={100}
        py={50}
      >
        <Flex flexDir={"column"} flex={2}>
          <Text fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}>
            Hello. My name is Kyle and I currently live in Seattle. I recently
            interned at Amazon, and I decided to move up for a full-time Android
            developer position. In addition to Android development, I am also
            very interested in web development.
          </Text>
          <br />
          <Text fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}>
            I started coding in high school for my AP CS class, and I instantly
            became hooked. There is something about making applications for
            users that makes me want to keep learning and trying new things.
          </Text>
          <br />
          <Text fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}>
            In my free time I like to hike, play video games, and solve
            Rubik&apos;s cubes. I&apos;m also a huge fan of Rocket League
            eSports and watch almost every game.
          </Text>
        </Flex>
        <Image
          borderRadius={"full"}
          boxSize={"450"}
          src={ProfilePicNormal.src}
          fallbackSrc="https://via.placeholder.com/600x600.png"
          alt="My face"
        />
      </Flex>
      <Box mx={100} my={50}>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
          textAlign={"center"}
        >
          My skills
        </Heading>
        <Flex my={50} justify="space-between">
          {SKILL_BOX_ITEMS.map((item, index) =>
            <SkillBox key={index} {...item} />
          )}
        </Flex>
      </Box>
    </>
  );
}

export default About;
