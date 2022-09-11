import { Flex, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { NavItem, NavItems } from "../../lib/data/NavbarData";

function MobileNav({ onClick, navItems }: NavItems) {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} onClick={onClick} />
      ))}
    </Stack>
  );
}

function MobileNavItem({ onClick, label, href }: NavItem) {
  return (
    <NextLink href={href ?? "#"} passHref scroll={false}>
      <Flex
        py={2}
        as={Link}
        justify={"space-between"}
        align={"center"}
        onClick={onClick}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </NextLink>
  );
}

export default MobileNav;
