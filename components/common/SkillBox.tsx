import {
  Center,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { SkillBoxItem } from "../../lib/data/SkillBoxData";

function SkillBox({ icon, title, description }: SkillBoxItem) {
  const textColor = useColorModeValue("white", "gray.800");
  const cardColor = useColorModeValue("gray.800", "white");

  return (
    <Flex
      borderRadius={"20px"}
      flexDir={"column"}
      w={"350px"}
      h={"350px"}
      bg={cardColor}
    >
      <Center
        bg={textColor}
        color={cardColor}
        borderRadius={"20px 20px 0%"}
        w={"70px"}
        h={"60px"}
        mx={"30px"}
        mt={"35px"}
        padding={"20px"}
        justifyContent={"center"}
      >
        <Icon as={icon} w="30px" h="30px" />
      </Center>
      <Heading color={textColor} mt="35px" mx="30px">
        {title}
      </Heading>
      <Text color={textColor} mt="15px" mx="30px">
        {description}
      </Text>
    </Flex>
  );
}

export default SkillBox;

{
  /* <Tabs
            isFitted
            variant={"line"}
            orientation={"horizontal"}
            minH={"50vh"}
          >
            <TabList>
              <Tab as={"b"} fontSize={"xl"}>
                Android
              </Tab>
              <Tab as={"b"} fontSize={"xl"}>
                Web
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs> */
}
