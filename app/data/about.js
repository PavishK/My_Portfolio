import { CodeIcon, ServerIcon, DatabaseIcon, FileTextIcon } from "lucide-react";

export const cardsData = [
  {
    title: "Frontend Developer",
    description:
      "I'm a frontend developer with experience in creating responsive and performance-optimized websites.",
    icon: <CodeIcon className="w-8 h-8 text-primary mb-3" />,
  },
  {
    title: "Backend Developer",
    description:
      "I build fast, efficient backend systems and APIs designed for performance and scalability.",
    icon: <ServerIcon className="w-8 h-8 text-primary mb-3" />,
  },
  {
    title: "Database Management",
    description:
      "I design and manage relational and non-relational databases efficiently.",
    icon: <DatabaseIcon className="w-8 h-8 text-primary mb-3" />,
  },
  {
    title: "Download My Resume",
    description: "Get a copy of my latest resume in PDF format.",
    icon: <FileTextIcon className="w-7 h-7 text-primary mb-3" />,
    link: "/resume/PavishK_resume.pdf",
  },
];