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
  starbucks,
  tesla,
  shopify,
  carrent,
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
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "React Specialist",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
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
    title: "Self-Taught Developer",
    company_name: "Independent Projects",
    icon: starbucks,
    iconBg: "#2E3440",
    date: "2022- Present",
    points: [
      "Independently acquiring skills in data analysis and insights generation through self-guided learning, with a focus on Python, SQL, and data visualization libraries.",
      "Collaborating with virtual communities and fellow self-taught developers to share knowledge, discuss best practices, and tackle challenging problems.",
      "Creating and implementing dashboards and interactive visualizations as part of personal projects to effectively communicate insights and demonstrate technical proficiency.",
      "Developing and refining data collection strategies and protocols independently to ensure optimal data quality and integrity in self-driven projects.",
    ],
    
  },
  {
    title: "Machine Learning Engineer",
    company_name: "LORI",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Feb 2018",
    points: [
      "Designing, optimizing, and deploying advanced machine learning models to tackle complex challenges, utilizing tools like TensorFlow, Python, and R.",
      "Collaborating with diverse teams to integrate machine learning solutions effectively into products and services.",
      "Ensuring algorithm robustness through thorough testing and validation.",
      "Contributing to tools for model training and deployment.",
    ],
  },
  {
    title: "Supply Chain Analyst:",
    company_name: "EABL",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Analyzing and enhancing supply chain processes for optimal efficiency and cost-effectiveness.",
      "Collaborating with multidisciplinary teams, including procurement, logistics, and operations, to optimize the end-to-end supply chain.",
      "Implementing strategies for responsive and adaptive supply chain management, ensuring seamless operations across various touchpoints.",
      "Participating in supply chain audits and offering constructive insights to improve overall performance.",
    ],
  },
  {
    title: "Quantitative Analyst",
    company_name: "Microsoft",
    icon: meta,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Present",
    points: [
      "Utilizing advanced mathematical and statistical models to analyze financial data and make informed investment decisions.",
      "Collaborating with various departments including risk management, traders, and financial engineers to develop quantitative strategies.",
      "Implementing and refining mathematical algorithms for pricing, risk assessment, and performance evaluation.",
      "Participating in model validation and review processes, offering valuable insights to enhance quantitative models' accuracy and robustness.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He's a proficient data scientist that helped NCE Corporation increase their revenue by 20% in just six months.",
    name: "Majok Deng",
    designation: "NCE",
    company: "Solutions Co.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    testimonial:
      "Drove our company to  launch a successful new product line that exceeded their sales targets by 50%.",
    name: "Bernard Steve",
    designation: "LORI",
    company: "Lori Systems",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After working with Sam, 456 Enterprises reduced their lead times by 30% and increased their profit margins by 15%. We can't him them enough!",
    name: "Albert ",
    designation: "456 Ent.",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
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
        name: "restapi",
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