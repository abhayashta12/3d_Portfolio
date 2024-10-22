import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  orbit5,
  canada,
  netflix,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Analyst",
    company_name: "Canada's Wonderland",
    icon: rogers,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Integrated RSAT into systems, optimizing security and operational efficiency across multiple platforms and protocols. ",
      "Directed Tier 1-3/L3 device management and deployment for 1500+ devices park-wide, ensuring smooth park-wide operations. ",
      "Executed mass changes on remote workstations using PowerShell, ConnectWise, and SecureCRT, enhancing park-wide productivity.",
    ],
  },

  {
    title: "Access Control Officer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "December 2023 - Present",
    points: [
      "Maintained a flawless record of safety and security at 50+ major events with 50,000+ attendees.",
      "Proactively identified and resolved security threats, preventing event disruptions, and ensuring incident-free experiences.",
      "Received commendation for outstanding professionalism and customer service, leading to increased event attendance.",
      "Successfully apprehended trespassers, guaranteeing the ejection of unauthorized individuals from sold-out concerts without incident.",
    ],
  },
  {
    title: "Social Media Manager",
    company_name: "Orbit 5",
    icon: orbit5,
    iconBg: "#383E56",
    date: "May 2023 - November 2023",
    points: [
      "Amassed over 50,000+ impressions on IG page, built social media strategies to engage audience with the content and generate leads.",
      "Successfully ran Ad-campaigns based on market research for a networking summmit leading to 2000+ registrations and 1000+ attendes attending the in person event. ",
      "Created visually appealing social media graphics and engaged with the followers and community members by responding to comments and messages.",
      "Conducted market research and analysed social media analytics to inform campaign planning.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abhay proved me wrong.",
    name: "Urvish Patel",
    designation: "CTO",
    company: "Orbit 5",
    image:
      ""
  },

];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "Web-based platform that allows users to watch movie trailers and explore through diffrent genres to select the movie of their choice to watch on the weekend, providing a convenient and efficient solution for entertainment needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/abhayashta12/netflix-clone",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };