import {
  mobile,
  backend,
  web,
  html,
  css,
  reactjs,
  tailwind,
  git,
  java,
  python,
  mannheim,
  gerresheim,
  aixsolution,
  celonisFoundations,
  academicProcessMiningFundamentals,
  rwth,
  passwordGenerator,
  portfolioWebsite,
  CompleteBeginner,
  CompTIAPentest,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "expertise",
    title: "Expertise",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Student",
    icon: web,
  },
  {
    title: "Consultant",
    icon: mobile,
  },
  {
    title: "Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python 3",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
];

const educations = [
  {
    title: "B.Sc. Computer Science",
    name: "RWTH Aachen University",
    icon: rwth,
    iconBg: "#E6DEDD",
    date: "October 2021 - Exp. August 2024",
    points: [
      'Successfully attended courses in "Data structures and Algorithms", "Computability and Complexity" and "Software Engineering"',
      "Current GPA 1.7 (GER). Attending the fourth semester.",
    ],
  },
  {
    title: "Mathematics in Business and Economics",
    name: "University of Mannheim",
    icon: mannheim,
    iconBg: "#E6DEDD",
    date: "September 2020 - August 2021",
    points: [
      "Studied for two semesters in Mannheim",
      'Successfully attended courses in "Finance", "Production" and "Accounting"',
    ],
  },
  {
    title: "A-Levels",
    name: "Gymnasium Gerresheim",
    icon: gerresheim,
    iconBg: "#E6DEDD",
    date: "September 2011 - June 2019",
    points: [
      "Successfully completed the German A-Levels (Abitur)",
      "Major subjects: Mathematics, German",
      "GPA 1.6 (GER)",
    ],
  },
];

const experiences = [
  {
    title: "Student Consultant",
    company_name: "aixsolution e.V.",
    icon: aixsolution,
    iconBg: "#E6DEDD",
    date: "November 2022 - present",
    points: [
      "Did a project in Industrial Internet of Things (IIoT) and Industry 4.0. The project was about the development of a Go-to-Market-Strategy.",
      "I am part of the Digital Solutions Resort. We are responsible for the digital transformation of aixsolution.",
    ],
  },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// Template for testimonials
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Password Generator",
    description:
      "Password Generator with different settings for the generated password. Allows settings like length or characters. You can then copy the password with a button, generate a new one or reset everything.",
    tags: [
      {
        name: "python3",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit.io",
        color: "green-text-gradient",
      },
    ],
    image: passwordGenerator,
    source_code_link: "https://github.com/m4rk-git/password-generator.git",
  },
  {
    name: "Portfolio Website",
    description:
      "My Portfolio Website built with React.js and Tailwind.css. The purpose for this website was to learn React.js and to get an introduction into three.js and 3D objectives. It is based on a template from JavaScript Mastery.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioWebsite,
    source_code_link:
      "https://gitfront.io/r/user-8139349/HD1pV5xqJFnT/portfolio-website/",
  },
];

const certificates = [
  {
    name: "Complete Beginner Learning Path",
    image: CompleteBeginner,
  },
  {
    name: "CompTIA Pentest+",
    image: CompTIAPentest,
  },
];

const badges = [
  {
    name: "Academic Process Mining Fundamentals",
    image: academicProcessMiningFundamentals,
  },
  {
    name: "Celonis Foundations",
    image: celonisFoundations,
  },
];

export {
  services,
  technologies,
  educations,
  experiences,
  testimonials,
  projects,
  certificates,
  badges,
};
