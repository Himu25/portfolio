import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Development Intern",
    company: "MobiGuest",
    startDate: "Nov 2023",
    isCurrentJob: true,
    location: "Bangalore, Remote",
    description: [
      "Refactored MVP website into a production-ready application using Next.js.",
      "Streamlined guest check-in flow, order management, campaign management, and feedback collection.",
      "Created a QR code generation system with customizable features to enhance operational efficiency.",
    ],
  },
  {
    designation: "Frontend Intern",
    company: "Nixon Bit",
    startDate: "Jul 2023",
    endDate: "Oct 2023",
    isCurrentJob: false,
    location: "Noida, Remote",
    description: [
      "Integrated multiple APIs for user authentication and case management.",
      "Implemented Formik and Yup for robust form validation to improve data submission accuracy.",
      "Developed a file scanning feature for call detail reports, managing large datasets.",
      "Led the frontend architecture for a CDR analysis tool used by law enforcement agencies.",
    ],
  },
];

export default experiences;
