import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Engineer I",
    company: "MAQ Software",
    startDate: "Jun 2025",
    endDate: "May 2026",
    isCurrentJob: false,
    location: "Noida, India (On-site)",
    shortDescription:
      "Backend engineer on a multi-tenant monitoring platform — cut dashboard load time 75% and scaled ingestion 6x.",
    description: [
      "Cut dashboard load time 75% (2.4s to 0.6s) by partitioning PostgreSQL telemetry tables by day, adding BRIN indexes, and serving charts from pre-aggregated minute/hour/day rollups.",
      "Scaled telemetry ingestion 6x by building BullMQ workers that bulk-load data with PostgreSQL COPY and idempotent upserts, making failed batches safe to retry.",
      "Secured the platform with Microsoft Entra ID authentication, tenant-scoped request isolation, and role-based access control (RBAC) across every dashboard view and action.",
      "Cut PostgreSQL read load with Redis result caching (grain-aware TTLs) and per-tenant rate limiting, so one busy tenant can't slow down the rest.",
      "Shipped anomaly detection and short-term forecasting with EWMA and Holt methods for ~90-minute early warnings on telemetry trends.",
    ],
  },
  {
    designation: "Software Development Intern",
    company: "MobiGuest",
    startDate: "Nov 2023",
    endDate: "Dec 2024",
    isCurrentJob: false,
    location: "Bangalore, India (Remote)",
    shortDescription:
      "Shipped a 5-step digital check-in flow and 30+ REST API integrations for a hotel guest-experience platform.",
    description: [
      "Reduced manual front-desk work 60% by building a 5-step guest check-in flow with Redux across personal details, documents, rooms, preferences, and payment.",
      "Integrated 30+ REST APIs into a Next.js frontend with async handling, consistent loading, error states, and toast notifications.",
      "Migrated business logic from Firebase Functions to Node.js REST APIs with schema validation, standardized responses, and structured logging.",
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
