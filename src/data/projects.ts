import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "himachal-ultrasound-portal",
    title: "Ultrasound Management Portal",
    description:
      "This portal is for Himachal Pradesh govt hospital to refer pregnant women to nearby ultrasound clinics.",
    icon: "/skills/express.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl:
      "https://github.com/Himu25/Himachal_Govt_Ultrasound_management_portal",
    url: "https://drive.google.com/file/d/1FXtBS0b99oSKTd_ZFatx7K2nGzOBDTTH/view",
    tags: ["Hbs", "Express.js", "MongoDB"],
  },
  {
    id: "bidkaro",
    title: "BidKaro",
    description:
      "A real-time auction platform offering secure authentication and smooth bidding functionality.",
    icon: "/skills/svelte.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Himu25/BidKaro.git",
    url: "https://bid-karo.vercel.app",
    tags: ["Redis", "TypeScript", "Svelte", "Node.js"],
  },
  {
    id: "shipgoods",
    title: "ShipGoods",
    description:
      "A logistics platform providing real-time pricing, live driver tracking, and advanced booking features.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://drive.google.com/file/d/1o1PXLE25EkY2OdbgKqukt6VLeV8kNX3g/view",
    githubUrl: "https://github.com/Himu25/ShipGoods-Backend",
    tags: ["Next.js", "Express.js", "Redis", "Kafka", "Socket.IO"],
  },
  {
    id: "ai-blog",
    title: "AI Blog",
    description:
      "A blog platform with AI-generated content and secure user authentication using NextAuth.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Himu25/AIBlog-IIITU",
    url: "https://ai-blog-iiitu.vercel.app",
    tags: ["Next.js", "Prisma", "MongoDB", "NextAuth"],
  },
  {
    id: "ticketing-app",
    title: "Ticketing App",
    description:
      "A microservices-based ticketing platform with secure user authentication, ticket buying, selling, and payment processing with Stripe.",
    icon: "/skills/kubernetes.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Himu25/Ticketing_app",
    tags: [
      "Next.js",
      "TypeScript",
      "Microservices",
      "Docker",
      "Kubernetes",
      "Jest",
      "Nats-streaming",
      "Stripe",
    ],
  },
];

export default projects;
