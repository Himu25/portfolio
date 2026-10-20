import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "shipgoods",
    title: "ShipGoods",
    description:
      "On-demand goods-transport platform with live driver tracking, dynamic pricing, and an AI voice assistant that calls riders inside the app.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://drive.google.com/file/d/1o1PXLE25EkY2OdbgKqukt6VLeV8kNX3g/view",
    githubUrl: "https://github.com/Himu25/ShipGoods",
    tags: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Kafka",
      "Socket.IO",
      "Groq LLM",
      "Stripe",
      "Docker",
      "Kubernetes",
    ],
    highlights: {
      backend: [
        "Scaled real-time tracking with the Socket.IO Redis adapter, using JWT-authenticated sockets and room-based delivery (user:<id>, driver:<id>) instead of broadcasts.",
        "Built a driver-location pipeline that rejects implausible GPS jumps, caches the latest position in Redis with a TTL, and streams updates through Kafka into MongoDB.",
        "Matched bookings to nearby drivers and vehicles with a MongoDB 2dsphere index and $geoNear queries.",
        "Made booking acceptance race-safe with an atomic findOneAndUpdate on the pending status, so two drivers can never claim the same job.",
        "Wrote a pricing engine: base fare plus per-km rate by vehicle type, with night, long-distance, weather and traffic surcharges.",
        "Built an LLM voice agent on Groq function calling: tools re-verify booking ownership, ETA uses Google Routes with an OSRM fallback, guardrails block prompt injection and secret leaks, and Redis NX locks dedupe calls.",
      ],
      frontend: [
        "Next.js App Router with middleware-based, role-aware routing for user, driver and admin dashboards.",
        "Live map with React-Leaflet and Leaflet Routing Machine, with driver markers updated over Socket.IO.",
        "In-app voice calls using the Web Speech API (Hindi/Hinglish) for recognition and Web Audio for playback.",
        "Redux Toolkit auth state persisted in cookies, Stripe Elements checkout, and ApexCharts fleet analytics.",
      ],
    },
  },
  {
    id: "bidkaro",
    title: "BidKaro",
    description:
      "Real-time auction marketplace that uses Redis as its primary database for items, bids, sessions, search and rankings.",
    icon: "/skills/svelte.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Himu25/BidKaro.git",
    url: "https://bid-karo.vercel.app",
    tags: ["SvelteKit", "TypeScript", "Node.js", "Redis", "RediSearch", "Lua", "Chart.js"],
    highlights: {
      backend: [
        "Modelled the whole domain in Redis: hashes for items and users, sorted sets ranking items by price, views and ending time, and sets for likes.",
        "Serialized concurrent bids with a distributed lock (SET NX PX with a random token) and a Lua compare-and-delete unlock, aborting work if the lock expires.",
        "Counted unique views in one Lua script: HyperLogLog (PFADD) dedupes viewers, then the item counter and views ranking update atomically.",
        "Full-text search with a RediSearch index over name, description, price and ending time, with weighted title matches and fuzzy partial terms.",
        "Auth with scrypt salted password hashes and Keygrip-signed cookie sessions, plus Redis page caching for static routes.",
        "Found common interests between users with Redis set intersections (SINTER) of liked items.",
      ],
      frontend: [
        "SvelteKit with server endpoints and TypeScript end to end.",
        "Bid-history price chart built with Chart.js and a Luxon time axis.",
        "Debounced live search, item carousels and a Tailwind CSS UI.",
      ],
    },
  },
  {
    id: "ticketing-app",
    title: "Ticketing App",
    description:
      "Event-driven ticket marketplace split into auth, tickets, orders, payments and expiration microservices on Kubernetes.",
    icon: "/skills/kubernetes.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Himu25/Ticketing_app",
    tags: [
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "NATS Streaming",
      "Bull",
      "Stripe",
      "Docker",
      "Kubernetes",
      "Jest",
    ],
    highlights: {
      backend: [
        "Database-per-service design: each service owns its MongoDB and communicates only through NATS Streaming events.",
        "Optimistic concurrency control with document versioning (mongoose-update-if-current), so out-of-order events can't corrupt replicated ticket data.",
        "Queue groups with manual acknowledgements for reliable at-least-once event processing.",
        "Order expiry handled by a Bull (Redis) delayed job that cancels unpaid orders and releases the reserved ticket.",
        "Published my own npm package (@tiknow/common) for shared errors, auth middleware and typed event contracts.",
        "Route tests with Jest, Supertest and mongodb-memory-server; Docker images, Kubernetes deployments, NGINX ingress and a Skaffold dev loop.",
      ],
      frontend: [
        "Next.js App Router that fetches data server-side through the in-cluster ingress, forwarding cookies for auth.",
        "Reusable useRequest hook for API calls with unified loading and error handling.",
        "Flows to sell tickets, place orders, track order status and pay with Stripe.",
      ],
    },
  },
  {
    id: "ai-blog",
    title: "AI Blog",
    description:
      "Blogging platform for IIIT Una students with Google/GitHub sign-in, a rich-text editor and AI-assisted writing.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Himu25/AIBlog-IIITU",
    url: "https://ai-blog-iiitu.vercel.app",
    tags: ["Next.js", "Prisma", "MongoDB", "NextAuth", "Gemini API", "Cloudinary", "Tailwind CSS"],
    screenshots: ["/images/projects/ai-blog.png"],
    highlights: {
      backend: [
        "Next.js route handlers for posts, categories, comments and a most-viewed feed.",
        "Prisma schema on MongoDB modelling users, OAuth accounts, sessions, categories, posts and comments.",
        "Paginated, category-filtered feeds that fetch the page and total count in one Prisma transaction, with atomic view-count increments.",
        "NextAuth with Google and GitHub OAuth through the Prisma adapter, guarding the write and comment endpoints.",
      ],
      frontend: [
        "Rich-text editor (React Quill, loaded client-only) with Cloudinary image uploads.",
        "Gemini API integration to generate and regenerate story drafts from a prompt.",
        "Category browsing, trending and editor's-pick rails, pagination, and a top progress bar.",
      ],
    },
  },
];

export default projects;
