import {
  telephony,
  cloudIcon,
  dbIcon,
  engIcon,
  leadIcon,
  bwmap,
  nairobi,
  whiteabstract,
  logo,
  logotext,
  shaq,
  backend,
  ux,
  frontend,
  prototyping,
  github,
  close,
  download,
  downloadHover,
  pineapple,
  pineappleHover,
  menu,
  resume,
  send,
  sendHover,
  bash,
  docker,
  fastapi,
  git,
  snowflake,
  python,
  pandas,
  jenkins,
  postgresql,
  streamlit,
  amazon,
  kubernetes,
  dbt,
  tensorflow,
  komikult,
  leaderboard,
  rakuten,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
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
    title: "Lead Cloud Consultant",
    icon: cloudIcon,
  },
  {
    title: "Snowflake & AWS Architect",
    icon: dbIcon,
  },
  {
    title: "Data Engineering",
    icon: engIcon,
  },
  {
    title: "Leadership & Stratégie",
    icon: leadIcon,
  },
];

const technologies = [
  {
    name: "Snowflake",
    icon: snowflake,
  },
  {
    name: "Data Build Tools",
    icon: dbt,
  },
  {
    name: "AWS",
    icon: amazon,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Fastapi",
    icon: fastapi,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "SQL",
    icon: postgresql,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Streamlit",
    icon: streamlit,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
];

const experiences = [
  {
    title: "Lead Cloud Consultant / Data Project Lead",
    company_name: "Freelance / Datascientest",
    icon: dcc, // Assure-toi que c'est une icône "Tech"
    iconBg: "#333333",
    date: "Jan 2024 - Aujourd'hui",
    points: [
      "Conception d'architectures Modern Data Stack (Snowflake, dbt, AWS) pour le traitement de données massives.",
      "Pilotage de projets Data de bout en bout : de la définition des besoins métiers (Stakeholder Management) au déploiement en production.",
      "Développement de pipelines ETL/ELT robustes et industrialisation de modèles de Machine Learning (MLOps).",
      "Certification Snowflake SnowPro Core & AWS Cloud Practitioner.",
    ],
  },
  {
    title: "Chef de Groupe d'Investigation (Lead)",
    company_name: "Gendarmerie Nationale (PJ)",
    icon: kelhel, // Assure-toi que c'est une icône "Gendarmerie"
    iconBg: "#333333",
    date: "Jan 2018 - Déc 2023",
    points: [
      "Management opérationnel d'une unité d'élite (10-20 enquêteurs) : Gestion de crise, pilotage des priorités et coordination des équipes.",
      "Supervision d'analyses criminelles complexes : Traitement de données non structurées (téléphonie, bancaire) pour identifier des réseaux criminels.",
      "Vulgarisation technique : Présentation de rapports stratégiques aux magistrats et décideurs administratifs.",
      "Mise en place de nouvelles méthodologies d'investigation numérique (OSINT, Analyse relationnelle).",
    ],
  },
  {
    title: "Enquêteur Police Judiciaire & Analyste",
    company_name: "Gendarmerie Nationale",
    icon: microverse,
    iconBg: "#333333",
    date: "Oct 2010 - Déc 2017",
    points: [
      "Conduite d'enquêtes judiciaires sensibles : Rigueur procédurale, collecte de preuves et auditions.",
      "Spécialisation en Analyse Criminelle : Utilisation de SQL et d'outils de visualisation (I2 Analyst Notebook) pour résoudre des affaires froides (Cold Cases).",
      "Gestion de la donnée judiciaire : Nettoyage, structuration et exploitation de bases de données hétérogènes.",
    ],
  },
  {
    title: "Chef de Groupe Transmissions (Sous-officier)",
    company_name: "Armée de Terre",
    icon: coverhunt, // Icône Armée
    iconBg: "#333333",
    date: "Sep 2004 - Oct 2010",
    points: [
      "Commandement d'équipe en environnement contraint et opérations extérieures.",
      "Déploiement et maintenance de systèmes d'information et de communication sécurisés.",
      "Formation et encadrement technique des jeunes recrues.",
    ],
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
    id: "project-1",
    name: "Telephony-Insights",
    description: "Architecture Modern Data Stack (ELT) pour l'analyse industrielle de données téléphoniques judiciaires. Ingestion AWS, Warehousing Snowflake et transformations via dbt.",
    tags: [
      {
        name: "snowflake",
        color: "blue-text-gradient",
      },
      {
        name: "dbt",
        color: "pink-text-gradient", // dbt est souvent associé à l'orange/rose
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: telephony, // Assure-toi que cette variable correspond bien à ton image "Telephony"
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7399790300069822465/", // Si pas de démo live, remet le repo ou un lien vers une vidéo
  },
  {
    id: "project-2",
    name: "Rakuten MLOps",
    description: "Industrialisation d'un moteur de classification multimodal (Texte/Image). Architecture Micro-services, conteneurisation Docker et déploiement Cloud.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
    ],
    image: rakuten,
    repo: "https://github.com/AntoinePELAMOURGUES/PROJET_CHALLENGE_RAKUTEN",
    demo: "https://youtu.be/yrr4jtXSoes",
  },
  {
    id: "project-3",
    name: "Movie Recommender",
    description: "Système de recommandation de films End-to-End. De l'entraînement du modèle au monitoring des performances en production (Drift detection).",
    tags: [
      {
        name: "scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "mlflow",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: komikult, // Variable image à vérifier
    repo: "https://github.com/AntoinePELAMOURGUES/PROJET_MLOPS_RECO_MOVIES",
  },
  {
    id: "project-4",
    name: "CartoFriches (Data PM)",
    description: "Stratégie produit pour la valorisation de l'Open Data foncier. Définition des KPI, User Stories et roadmap pour l'aide à la décision publique.",
    tags: [
      {
        name: "product-mgmt",
        color: "blue-text-gradient",
      },
      {
        name: "open-data",
        color: "green-text-gradient",
      },
      {
        name: "kpi",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard, // Variable image à vérifier
    repo: "https://www.canva.com/design/DAGg4AFFD4c/F3SzfWIef0WXsbcj9TBokA/view",
  },
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
