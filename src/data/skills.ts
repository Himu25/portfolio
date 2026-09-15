import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Languages",
    items: [
      { title: "JavaScript", level: SkillLevel.Expert, icon: "/skills/javascript.svg" },
      { title: "TypeScript", level: SkillLevel.Expert, icon: "/skills/typescript.svg" },
      { title: "Java", level: SkillLevel.Intermediate, icon: "/skills/java.svg" },
    ],
  },
  {
    title: "Backend",
    items: [
      { title: "Node.js", level: SkillLevel.Expert, icon: "/skills/nodejs.svg" },
      { title: "Express.js", level: SkillLevel.Expert, icon: "/skills/express.svg" },
      { title: "Fastify", level: SkillLevel.Expert, icon: "/skills/fastify.svg" },
      { title: "REST APIs", level: SkillLevel.Expert, icon: "/skills/rest-api.svg" },
      { title: "Microservices", level: SkillLevel.Intermediate, icon: "/skills/microservices.svg" },
    ],
  },
  {
    title: "Databases",
    items: [
      { title: "PostgreSQL", level: SkillLevel.Expert, icon: "/skills/postgresql.svg" },
      { title: "MongoDB", level: SkillLevel.Intermediate, icon: "/skills/mongodb.svg" },
      { title: "MySQL", level: SkillLevel.Intermediate, icon: "/skills/mysql.svg" },
      { title: "Redis", level: SkillLevel.Expert, icon: "/skills/redis.svg" },
    ],
  },
  {
    title: "Distributed Systems",
    items: [
      { title: "BullMQ", level: SkillLevel.Expert, icon: "/skills/bullmq.svg" },
      { title: "Kafka", level: SkillLevel.Intermediate, icon: "/skills/kafka.svg" },
      { title: "Socket.IO", level: SkillLevel.Intermediate, icon: "/skills/socket-io.png" },
      { title: "Caching", level: SkillLevel.Expert, icon: "/skills/caching.svg" },
      { title: "Rate Limiting", level: SkillLevel.Expert, icon: "/skills/rate-limit.svg" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { title: "React.js", level: SkillLevel.Expert, icon: "/skills/react.svg" },
      { title: "Next.js", level: SkillLevel.Expert, icon: "/skills/nextjs.png" },
      { title: "Tailwind CSS", level: SkillLevel.Expert, icon: "/skills/tailwind-css.svg" },
      { title: "Redux", level: SkillLevel.Expert, icon: "/skills/redux.svg" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { title: "Azure", level: SkillLevel.Intermediate, icon: "/skills/azure.svg" },
      { title: "Firebase", level: SkillLevel.Intermediate, icon: "/skills/firebase.svg" },
      { title: "Docker", level: SkillLevel.Intermediate, icon: "/skills/docker.svg" },
      { title: "Kubernetes", level: SkillLevel.Beginner, icon: "/skills/kubernetes.svg" },
      { title: "Git", level: SkillLevel.Expert, icon: "/skills/git.svg" },
      { title: "Linux", level: SkillLevel.Intermediate, icon: "/skills/ubuntu.png" },
    ],
  },
];

export default skills;
