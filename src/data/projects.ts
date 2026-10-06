import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "shipgoods",
    title: "ShipGoods",
    description:
      "Logistics platform with an LLM voice agent, real-time driver tracking, and fleet visibility across a 100 km search radius.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://drive.google.com/file/d/1o1PXLE25EkY2OdbgKqukt6VLeV8kNX3g/view",
    githubUrl: "https://github.com/Himu25/ShipGoods",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "Kafka",
      "Socket.IO",
      "Groq LLM",
      "Docker",
      "Kubernetes",
    ],
    about:
      "Built an LLM-powered AI voice agent that calls riders in-app when their driver is 5 km away and on arrival, answering ETA, driver, and car-finder questions in Hindi via Groq function calling over 6 guarded tools. Scaled real-time driver tracking horizontally with the Socket.IO Redis adapter over JWT-authenticated sockets, and streamed validated driver locations through a Kafka pipeline into MongoDB, matching bookings to drivers within 100 km using geospatial queries.",
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
    about:
      "A real-time auction platform: live bid updates, secure authentication, and race-condition-safe bidding flows backed by Redis.",
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
    about:
      "A microservices-based ticket marketplace split into independent auth, tickets, orders, payments, and expiration services that communicate over a NATS event bus, each one containerized and orchestrated with Kubernetes/Skaffold.",
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
    screenshots: ["/images/projects/ai-blog.png"],
    about:
      "A blogging platform built for IIIT Una students, with category browsing, a trending/top-picks rail, and secure NextAuth-based login for publishing posts.",
  },
];

export default projects;
