import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "shipgoods",
    title: "ShipGoods",
    description:
      "Logistics platform with end-to-end booking workflows, real-time driver tracking, and fleet visibility across a 100 km search radius.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://drive.google.com/file/d/1o1PXLE25EkY2OdbgKqukt6VLeV8kNX3g/view",
    githubUrl: "https://github.com/Himu25/ShipGoods",
    tags: ["Next.js", "Node.js", "MongoDB", "Redis", "Kafka", "Socket.IO"],
    about:
      "Built 8 booking-related API workflows covering shipment creation, scheduling, driver assignment, status updates, payments, and ratings. Engineered real-time tracking with Kafka for location events and Socket.IO + Redis for live session mapping.",
  },
  {
    id: "bidkaro",
    title: "BidKaro",
    description:
      "Real-time auction platform with secure authentication and smooth bidding flows.",
    icon: "/skills/svelte.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Himu25/BidKaro.git",
    url: "https://bid-karo.vercel.app",
    tags: ["Svelte", "TypeScript", "Node.js", "Redis"],
  },
  {
    id: "ticketing-app",
    title: "Ticketing App",
    description:
      "Microservices ticketing platform with auth, ticket trading, and Stripe payments.",
    icon: "/skills/kubernetes.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Himu25/Ticketing_app",
    tags: ["Next.js", "TypeScript", "Docker", "Kubernetes", "Stripe", "NATS"],
  },
  {
    id: "ai-blog",
    title: "AI Blog",
    description:
      "Blog platform with AI-generated content and secure NextAuth authentication.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Himu25/AIBlog-IIITU",
    url: "https://ai-blog-iiitu.vercel.app",
    tags: ["Next.js", "Prisma", "MongoDB", "NextAuth"],
  },
];

export default projects;
