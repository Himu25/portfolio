import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Expert,
        icon: "/skills/typescript.svg",
      },
      {
        title: "C/C++",
        level: SkillLevel.Intermediate,
        icon: "/skills/cpp.png",
      },
      {
        title: "Java",
        level: SkillLevel.Intermediate,
        icon: "/skills/java.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "Tailwind CSS",
        level: SkillLevel.Expert,
        icon: "/skills/tailwind-css.svg",
      },
      {
        title: "Ant Design",
        level: SkillLevel.Expert,
        icon: "/skills/ant-design.svg",
      },
      {
        title: "Material-UI",
        level: SkillLevel.Expert,
        icon: "/skills/material-ui.svg",
      },
      {
        title: "Bootstrap",
        level: SkillLevel.Expert,
        icon: "/skills/bootstrap.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Expert,
        icon: "/skills/css.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "Firebase",
        level: SkillLevel.Expert,
        icon: "/skills/firebase.svg",
      },
      {
        title: "Redis",
        level: SkillLevel.Intermediate,
        icon: "/skills/redis.svg",
      },
      {
        title: "Kafka",
        level: SkillLevel.Intermediate,
        icon: "/skills/kafka.svg",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Intermediate,
        icon: "/skills/docker.png",
      },
      {
        title: "Kubernetes",
        level: SkillLevel.Beginner,
        icon: "/skills/kubernetes.svg",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
    ],
  },
  {
    title: "Other Tools & Platforms",
    items: [
      {
        title: "GitHub",
        level: SkillLevel.Beginner,
        icon: "/skills/github.svg",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
    ],
  },
  {
    title: "Non-Technical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Thinking",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
