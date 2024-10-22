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
  bluejays,
  threejs,
} from "../assets"; // Ensure assets are correctly imported

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Web Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Content Creator", icon: creator },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
];

export const experiences = [
  {
    title: "Access Control Officer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "December 2023 - Present",
    points: [
      "Maintained security at major events.",
      "Proactively resolved security threats.",
      "Commended for professionalism and customer service.",
    ],
  },
  // Add other experiences...
]; 