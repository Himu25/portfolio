import { INavItem } from "@/types";
import {
  faBriefcase,
  faEnvelope,
  faLaptopCode,
  faLayerGroup,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
  { name: "About", link: "/#about", icon: faUser },
  { name: "Experience", link: "/#experience", icon: faBriefcase },
  { name: "Skills", link: "/#skills", icon: faLayerGroup },
  { name: "Work", link: "/#projects", icon: faLaptopCode },
  { name: "Contact", link: "/#contact", icon: faEnvelope },
];
