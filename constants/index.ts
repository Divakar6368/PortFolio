
export const technologies = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
]

export const testimonials = [
  {
    name: "Physics Wallah",
    role: "Decode DSA in C++",
    image: "./pw.svg",
    content: "Certificate img",
  },
  {
    name: "Coder Army",
    role: "Full Stack Devlepment",
    image: "./coder.png",
    content: "Certificate img",
  },
  {
    name: "Microsoft",
    role: "System Design",
    image: "https://avatar.iran.liara.run/public/3",
    content: "Certificate img",
  },
];


export const projects = [
  {
    title: "Tree-Bio",
    description:
      "A modern Link-in-Bio platform that allows users to create a personalized profile page and consolidate their social media links, portfolio, contact details, and external resources into one shareable link.",
    image:
      "Bio.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Clerk",
      "Prisma"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Divakar6368/LinkTree",
    features: [
      "Personalized link-in-bio profiles",
      "Secure authentication with Clerk",
      "Database management with Prisma",
      "Responsive and modern UI",
      "Centralized social media and portfolio links"
    ]
  },
  {
    title: "CodeX - AI Coding Platform",
    description:
      "A full-stack coding and learning platform featuring an interactive Monaco code editor, Judge0-powered code execution, AI-assisted problem solving, video-based learning, and administrative tools.",
    image:
      "Codex.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Monaco Editor",
      "Judge0"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Divakar6368/CodeX",
    features: [
      "AI-powered coding doubt solver",
      "Online code editor and execution",
      "Video solutions and comments",
      "Role-based authentication",
      "Admin dashboard"
    ]
  },
  {
    title: "Blood Bank - Sample Booking Platform",
    description:
      "A healthcare-focused web application that helps users discover blood bank information, explore available blood samples, and navigate a streamlined sample booking process.",
    image:
      "Bloodbank.png",
    technologies: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "Framer Motion"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Divakar6368/Blood-Bank",
    features: [
      "Blood bank information and discovery",
      "Blood group and sample availability",
      "Sample booking workflow",
      "User medical information management",
      "Booking limit validation",
      "Responsive healthcare-focused interface"
    ]
  }
];