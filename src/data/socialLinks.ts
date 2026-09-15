import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: "GitHub",
    url: "https://github.com/Himu25",
    icon: faGithub,
    text: "Himu25",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/Himanshu255",
    icon: faLinkedin,
    text: "Himanshu Singh",
  },
  {
    name: "Email",
    url: "mailto:Himanshu638684@gmail.com",
    icon: faEnvelope,
    text: "Himanshu638684@gmail.com",
  },
];

export default socialLinks;
