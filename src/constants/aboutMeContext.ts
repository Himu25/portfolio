const ABOUT_ME_CONTEXT = `
Name: Himanshu Singh
Location: Noida, India
Role: Backend Engineer, interested in Agentic AI / LLM systems
Status: Immediate joiner, open to Noida, Delhi, Gurgaon, Bangalore, Pune, Hyderabad
Contact: Himanshu638684@gmail.com · +91-6386845325 · github.com/Himu25 · linkedin.com/in/Himanshu255

SUMMARY
Software Engineer with 1 year of full-time experience at MAQ Software and 1+ year of internship
experience, building scalable backend services and full-stack web applications using Node.js,
TypeScript, React, PostgreSQL and Redis. Improved a data pipeline's ingestion speed 6x and built an
LLM-powered AI voice agent. Solved 300+ DSA problems on LeetCode and other platforms.

EDUCATION
Indian Institute of Information Technology (IIIT) Una, Himachal Pradesh, India
B.Tech in Computer Science and Engineering, 2021 – 2025

EXPERIENCE

MAQ Software — Software Engineer I, Noida, India (On-site), June 2025 – May 2026
- Secured a multi-tenant monitoring platform using Microsoft Entra ID authentication, tenant-scoped
  request isolation, and role-based access control (RBAC) for dashboard views and actions.
- Reduced dashboard load time 75% (2.4s to 0.6s) by partitioning PostgreSQL telemetry tables by day,
  adding BRIN indexes, and serving charts from pre-aggregated minute/hour/day rollups.
- Cut database read load by adding Redis query caching with per-granularity TTLs and per-tenant
  rate limiting, so one busy tenant can't slow down others.
- Increased telemetry ingestion throughput 6x by building Azure Event Hubs consumers that bulk-load
  data with PostgreSQL COPY and idempotent upserts, making failed batches safe to retry.

MobiGuest — Software Development Intern, Bangalore, India (Remote), November 2023 – December 2024
- Reduced manual front-desk work 60% by building a 5-step digital guest check-in flow (ID upload,
  room selection, preferences, payment) in React and Redux with persisted form state.
- Migrated hotel business logic from Firebase Functions to Node.js REST APIs with schema
  validation, standardized responses, and structured logging.
- Integrated 30+ REST APIs into the Next.js hotel portal with consistent loading, error, and toast
  states.
- Built a drag-and-resize QR page builder with React-RND and the OpenAI API for branded digital
  menus and guest-service pages with AI-generated backgrounds.

Nixon Bit — Frontend Intern, Noida, India (Remote), July 2023 – October 2023
- Built the frontend architecture for a CDR (call-detail record) analysis platform used by law
  enforcement: auth, case workflows, analysis views, protected routing.
- Implemented Formik + Yup validation across login, signup, profile, password, and case-creation
  forms.
- Developed a CDR/IPDR file scanning pipeline that parses large multi-format call-detail CSVs into
  structured Redux datasets for analysis and geo mapping.

PROJECTS

ShipGoods (May 2026 – Present) — Next.js, Node.js, MongoDB, Redis, Socket.IO, Kafka, Groq LLM,
Docker, Kubernetes
- Built an LLM-powered AI voice agent (using Groq function calling over 6 guarded tools) that calls
  riders in-app when their driver is 5 km away and again on arrival, answering ETA, driver, and
  car-finder questions in Hindi.
- Enabled horizontal scaling of real-time driver tracking with the Socket.IO Redis adapter, routing
  location and booking events to per-user and per-driver rooms across all server instances over
  JWT-authenticated sockets.
- Engineered a Kafka pipeline that streams validated driver locations into MongoDB, filtering out
  invalid coordinates and GPS jumps over 5 km, and matched bookings to drivers within 100 km using
  MongoDB geospatial queries.

BidKaro — Svelte, TypeScript, Node.js, Redis
- Real-time auction/bidding platform with secure authentication and smooth, low-latency bidding
  flows.

Ticketing App — Next.js, TypeScript, Docker, Kubernetes, Stripe, NATS
- Microservices ticketing platform with its own auth service, ticket trading between services via a
  NATS event bus, and Stripe payments, deployed with Docker and orchestrated with Kubernetes.

AI Blog (IIITU) — Next.js, Prisma, MongoDB, NextAuth
- Blog platform for IIIT Una students with AI-generated content assistance and secure NextAuth
  authentication.

SKILLS
Languages: JavaScript, TypeScript, Java
Backend: Node.js, Express.js, Fastify, REST APIs, Microservices, Caching, Rate Limiting
Frontend: React, Next.js, Redux, Tailwind CSS, HTML, CSS
Databases: PostgreSQL, MongoDB, MySQL, Redis
Messaging & Real-time: Azure Event Hubs, Kafka, Socket.IO (Redis adapter), BullMQ
Cloud & DevOps: Azure, Firebase, Docker, Kubernetes, Git, Linux
AI & LLMs: AI Agents, LLM Function Calling, MCP, Prompt Guardrails, Groq, OpenAI API, Claude,
GitHub Copilot

ACHIEVEMENTS
- Solved 300+ DSA problems on LeetCode and other platforms.
`.trim();

export default ABOUT_ME_CONTEXT;
