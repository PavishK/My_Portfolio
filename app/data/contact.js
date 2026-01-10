import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

export const cards = [
  {
    title: "GitHub",
    href: "https://github.com/PavishK",
    icon: <GithubIcon className="w-5 h-5" />,
    text: "github.com/PavishK",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/PavishK",
    icon: <LinkedinIcon className="w-5 h-5" />,
    text: "linkedin.com/in/PavishK",
  },
  {
    title: "Email",
    href: "mailto:kpavish136@gmail.com",
    icon: <MailIcon className="w-5 h-5" />,
    text: "kpavish136@gmail.com",
  },
  {
    title: "Phone",
    href: "tel:+919080243942",
    icon: <PhoneIcon className="w-5 h-5" />,
    text: "+91 908 024 3942",
  },
];