import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Engineer I",
    company: "MAQ Software",
    startDate: "Jun 2025",
    endDate: "May 2026",
    isCurrentJob: false,
    location: "Noida, India (On-site)",
    description: [
      "Built Node.js + TypeScript backend services with Fastify for a multi-tenant monitoring platform, including tenant isolation, RBAC, and utilization APIs.",
      "Cut dashboard query latency from 2.4s to 0.6s (75%) with PostgreSQL partitioning, BRIN indexing, and minute/hour/day rollups.",
      "Added Redis result caching with grain-aware TTLs and per-tenant rate limiting to reduce PostgreSQL read load.",
      "Built BullMQ workers for telemetry ingestion and aggregation using bulk COPY, watermark processing, and idempotent upserts — 6x ingestion throughput.",
      "Shipped anomaly detection and short-term forecasting with EWMA and Holt methods for ~90-minute early warnings.",
    ],
  },
  {
    designation: "Software Development Intern",
    company: "MobiGuest",
    startDate: "Nov 2023",
    endDate: "Dec 2024",
    isCurrentJob: false,
    location: "Bangalore, India (Remote)",
    description: [
      "Developed a 5-step guest check-in workflow with Redux across personal details, documents, rooms, preferences, and payment.",
      "Migrated business logic from Firebase Functions to Node.js REST APIs with schema validation, standardized responses, and structured logging.",
      "Integrated 30+ REST APIs into a Next.js frontend with async handling, error states, and toast notifications.",
      "Built responsive QR experiences with React-RND and OpenAI APIs for customizable digital menus and guest services.",
    ],
  },
  {
    designation: "Frontend Intern",
    company: "Nixon Bit",
    startDate: "Jul 2023",
    endDate: "Oct 2023",
    isCurrentJob: false,
    location: "Noida, India (Remote)",
    description: [
      "Built the frontend architecture for a CDR analysis platform used by law enforcement, covering auth, case workflows, analysis views, and protected routing.",
      "Integrated REST APIs for authentication, case management, profile updates, and investigation search flows with Redux state handling.",
      "Implemented Formik + Yup validation across login, signup, profile, password, and case-creation forms to improve data accuracy.",
      "Developed a CDR/IPDR file scanning pipeline that parses large multi-format call-detail CSVs into structured Redux datasets for analysis and geo mapping.",
    ],
  },
];

export default experiences;
