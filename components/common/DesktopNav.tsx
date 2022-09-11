import { Link, Stack, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { NavItem, NavItems } from "../../lib/data/NavbarData";

function DesktopNav({ navItems }: NavItems) {
  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map((navItem) => (
        <DesktopNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}

function DesktopNavItem({ label, href }: NavItem) {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <NextLink href={href ?? "#"} passHref scroll={false}>
      <Link
        p={2}
        fontSize={"sm"}
        fontWeight={500}
        color={linkColor}
        _hover={{ 
          textDecoration: "none",
          color: linkHoverColor,
        }}
      >
        {label}
      </Link>
    </NextLink>
  );
}

export default DesktopNav;
