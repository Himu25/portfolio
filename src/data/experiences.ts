import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Engineer I",
    company: "MAQ Software",
    logo: "/images/companies/maq-software.png",
    linkedInUrl: "https://www.linkedin.com/company/maq-software/",
    startDate: "Jun 2025",
    endDate: "May 2026",
    isCurrentJob: false,
    location: "Noida, India (On-site)",
    shortDescription:
      "Backend engineer on a multi-tenant analytics platform: REST APIs, tenant isolation and PostgreSQL performance tuning.",
    description: [
      "Built 10+ REST APIs in Node.js and TypeScript serving dashboard charts for capacity utilization, workspace usage, throttling, top consumers and operation trends, with time-range filters and request validation.",
      "Secured the multi-tenant platform with JWT authentication middleware, tenant-scoped request isolation and role-based access control (RBAC) on API routes and dashboard actions.",
      "Cut dashboard query latency by 75% (2.4s to 0.6s) using PostgreSQL daily partitioning with partition pruning to skip irrelevant days, plus BRIN indexes for time-range scans.",
      "Reduced database read load with a Redis cache-aside strategy, TTLs and cache invalidation on data refresh; added per-tenant rate limiting so one busy tenant cannot slow others.",
    ],
  },
  {
    designation: "Software Development Intern",
    company: "MobiGuest",
    logo: "/images/companies/mobiguest-icon.png",
    linkedInUrl: "https://www.linkedin.com/company/mobiguest/",
    startDate: "Nov 2023",
    endDate: "Dec 2024",
    isCurrentJob: false,
    location: "Bangalore, India (Remote)",
    shortDescription:
      "Full-stack intern on a hotel guest-experience platform: digital check-in, Node.js APIs and a Next.js hotel portal.",
    description: [
      "Reduced manual front-desk work by 60% by building a 5-step digital guest check-in flow (ID upload, room selection, preferences, payment) in React and Redux with persisted form state.",
      "Improved production debuggability by migrating hotel business logic from Firebase Functions to Node.js REST APIs with schema validation, standardized responses and structured logging.",
      "Integrated 30+ REST APIs into the Next.js hotel portal with consistent loading, error and toast states, keeping every screen predictable under slow or failed API calls.",
      "Built a drag-and-resize QR page builder with React-RND and the OpenAI API, enabling hotels to design branded digital menus and guest-service pages with AI-generated backgrounds.",
    ],
  },
  {
    designation: "Frontend Intern",
    company: "Nixon Bit",
    logo: "/images/companies/nixonbit.png",
    linkedInUrl: "https://www.linkedin.com/company/nixonbit/",
    startDate: "Jul 2023",
    endDate: "Oct 2023",
    isCurrentJob: false,
    location: "Noida, India (Remote)",
    shortDescription:
      "Built the frontend for a law-enforcement CDR/IPDR analysis platform, from auth to geo-mapped case workflows.",
    description: [
      "Built the frontend architecture for a CDR analysis platform used by law enforcement, covering auth, case workflows, analysis views, and protected routing.",
      "Developed a CDR/IPDR file scanning pipeline that parses large multi-format call-detail CSVs into structured Redux datasets for analysis and geo mapping.",
      "Integrated REST APIs for authentication, case management, profile updates, and investigation search flows with Redux state handling.",
      "Implemented Formik + Yup validation across login, signup, profile, password, and case-creation forms to improve data accuracy.",
    ],
  },
];

export default experiences;
