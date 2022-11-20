import { IconType } from "react-icons";
import {
  MdLanguage,
  MdOutlineAndroid,
  MdOutlineComputer,
} from "react-icons/md";

export interface SkillBoxItem {
  icon: IconType;
  title: string;
  description: string;
}

// filler data
export const SKILL_BOX_ITEMS: Array<SkillBoxItem> = [
  {
    icon: MdLanguage,
    title: "Languages",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui,ullamcorper ut quis congue purus volutpat posuere lorem.",
  },
  {
    icon: MdOutlineAndroid,
    title: "Android",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui,ullamcorper ut quis congue purus volutpat posuere lorem.",
  },
  {
    icon: MdOutlineComputer,
    title: "Web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui,ullamcorper ut quis congue purus volutpat posuere lorem.",
  },
];
