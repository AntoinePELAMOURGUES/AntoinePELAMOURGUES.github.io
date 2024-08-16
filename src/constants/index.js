import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  rakuten,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id:"tech",
    title:"Compétences"
  },
  {
    id: "projects",
    title: "Projets",
  },
  {
    id: "experience",
    title: "Expériences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Modélisation",
    icon: frontend,
  },
  {
    title: "Ingénierie",
    icon: backend,
  },
  {
    title: "Gouvernance Déontologie",
    icon: ux,
  },
  {
    title: "Communication Collaboration",
    icon: prototyping,
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
    name: "Rails",
    icon: rubyrails,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
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
    title: "Sous-officier Armée de Terre",
    company_name: "Regiment de Transmissions",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Sep 2004 - Oct 2010",
  },
  {
    title: "Enquêteur police judiciaire",
    company_name: "Gendarmerie",
    icon: microverse,
    iconBg: "#333333",
    date: "Oct 2010 - Aujourd'hui",
  },
  {
    title: "Analyste criminel",
    company_name: "Gendarmerie",
    icon: kelhel,
    iconBg: "#333333",
    date: "Jan 2018 - Aujourd'hui",
  },
  {
    title: "Ingénieur Machine Learning",
    company_name: "",
    icon: dcc,
    iconBg: "#333333",
    date: "Avr 2025 - Aujourd'hui",
  },
];

const projects = [
  // {
  //   id: "project-1",
  //   name: "KomiKult",
  //   description: "A comic characters list app that displays Marvel characters.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: komikult,
  //   repo: "https://github.com/shaqdeff/KomiKult",
  //   demo: "https://shaqdeff.github.io/KomiKult/",
  // },
  {
    id: "project-2",
    name: "Rakuten",
    description: "Challenge Rakuten multimodal classification.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: rakuten,
    repo: "https://github.com/AntoinePELAMOURGUES/PROJET_CHALLENGE_RAKUTEN",
    demo: "https://youtu.be/yrr4jtXSoes",
  },
  // {
  //   id: "project-3",
  //   name: "Math Magicians",
  //   description: "This is a single-page calculator app built with React",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: math,
  //   repo: "https://github.com/shaqdeff/Math-Magicians",
  //   demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  // },
  // {
  //   id: "project-4",
  //   name: "Movie Metro",
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: movie,
  //   repo: "https://github.com/shaqdeff/Movie-Metro",
  //   demo: "https://movie-metro.netlify.app/",
  // },
  // {
  //   id: "project-5",
  //   name: "Nyeusi Fest Site",
  //   description:
  //     "This is a demo concert website for a music festival called Nyeusi.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
  //   demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  // },
];

export { services, technologies, experiences, projects };