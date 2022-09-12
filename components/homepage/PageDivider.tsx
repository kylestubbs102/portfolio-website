import { Divider, Flex, Text } from "@chakra-ui/react";

interface DividerLabel {
  label: string;
}

function PageDivider({ label }: DividerLabel) {
  return (
    <Flex flexDir={"row"} align={"center"} gap={3}>
      <Text>{label}</Text>
      <Divider borderColor={"gray.500"} orientation="horizontal" />
    </Flex>
  );
}

export default PageDivider;
