export interface NavItem {
  onClick?: () => void;
  label: string;
  href?: string;
}

export interface NavItems {
  onClick?: () => void;
  navItems: NavItem[];
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    href: "#",
  },
  {
    label: "Experience",
    href: "#",
  },
  {
    label: "Projects",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];
