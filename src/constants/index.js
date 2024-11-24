import {
  mobile,
  autoleap,
  hivebuy,
  tplex,
  web,
  javascript,
  typescript,
  html,
  css,
  angular,
  next,
  vue,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  testing,
  jira,
  zeplin,
  material,
  figma,
  carrent,
  jobit,
  tripguide,
  reactCertificate,
  agileScrum,
  angularMastering,
  jsWebDevelopment,
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
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "certificate",
    title: "Certificate",
  },
  {
    id: "education",
    title: "Educations",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue",
    icon: vue,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Unit Testing",
    icon: testing,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "UI Libraries",
    icon: material,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Hivebuy - Berlin, Germany",
    icon: hivebuy,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      `Engineered a suite of web application interfaces using React, HTML5, and CSS3 that enhanced user interaction;
        increased customer satisfaction ratings by approximately 20% and reduced bounce rates by nearly 15% due to
        improved responsiveness.`,
      `Utilized Redux and React Query for State Management with an eicient performance optimization that the overall
data load time is reduced by approximately ~20%.`,
      `Replaced the ineicient appointment system and restructured the client portal, reducing booking time by ~30% and
making client request processing faster by ~25% , which resulted in a growth of customer satisfaction by ~20%.
`
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Autoleap (Remote Canada)",
    icon: autoleap,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Dec 2023",
    points: [
      `Rened performance with code spliing and lazy loading strategies delivered an improvement of approximately
      ~25% in initial loading times.`,

      `Implemented GraphQL into Next js and React applications for fetching data, increasing eiciency by ~30% and
      decreasing the API response time by ~25%.`,

      `Engineered and integrated a Drag and Drop feature for orders and invoices, reducing processing time by ~50%,
      cuing the frequency of mistakes by ~10% , and increasing end-user contentment by ~15%.`,

      ` Built a comprehensive dashboard utilizing React and Chart.js that aggregated key performance metrics and now
      the tool is utilized by over 20 team members, fostering a culture of data-driven decision making across the
      organization.`,

      ` Crafted and implemented RESTful APIs with Node js, so that frontend and backend system are able to
      communicate with ease.`,

      `Conducted usability testing and collect the feedback to improve the UI component and thereby the user
      satisfaction has increased by ~15%`,

      `Collaborated with Product Management and UI/ UX designers to implement three cloud-based software
      applications, improving overall development speed by ~20% and usage by ~30%.`,
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company_name: "Tplex - Pakistan",
    icon: tplex,
    iconBg: "#383E56",
    date: "Oct 2018 - Oct 2021",
    points: [
      `• Developed and produced over 50 responsive and accessible user interfaces from visual designs and wireframes.
      To maintain uniformity, we aimed to make the UX of the sites and apps identical irrespective of the devices and
      achieved a ~90% accessibility compliance according to WCAG norms.`,
      `Created an advanced assessment platform leveraging Material UI and PrimeNG, resulting in a cohesive user
      experience; streamlined the design process, allowing for the addition of 20+ questions in under 5 minutes.`,
      `Optimized Redux store performance through the implementation of Redux Thunk middleware, with A/B testing
      demonstrating a 50% reduction in loading times, providing users with a more uid and responsive application
      experience.`,
      `Analyzed user behavior data to develop a seamless navigation system; achieved a 40% faster task completion time
      for users, directly enhancing overall user satisfaction and interaction eectiveness on the website.`,
      `Crafted several custom React hooks and sources of reusable components in React to follow the principles of
      encapsulation and don't repeat yourself, leading to an estimated cut of the code copypaste factor on ~14%.`,
      `Applied Tailwind CSS for customizable and responsive design and was able to design pages with up of 25% less
      time due to its utility-rst frame work.`,
    ],
  },
];

const education = [
  {
    title: "Masters",
    company_name: "Computer Science - Berlin, Germany",
    icon: hivebuy,
    iconBg: "#383E56",
    date: "Completed",
    points: [
      `Delivered research findings through impactful presentations and technical papers, demonstrating a profound understanding of Employee Engagement and Retention`,
    ],
  },
  {
    title: "Bachelors of Science",
    company_name: " Computer Engineering - Pakistan",
    icon: autoleap,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Dec 2019",
    points: [
      `Developed a comprehensive ERP system integrated with EHR capabilities, deployed across multiple organizations. The system streamlined operations, reduced inefficiencies by 30%, and enhanced data accuracy by 40%, earning recognition for its scalability, security, and user-focused design.`,
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "An exceptional problem-solver with deep technical expertise, Zubair consistently delivers robust, scalable solutions. His leadership and innovative mindset have been instrumental in driving complex projects to success",
    name: "Usman Ali",
    designation: "Project Manager",
    company: "Autoleap",
  },
  {
    testimonial:
      "With a sharp eye for design and flawless execution, Zubair creates stunning, user-friendly interfaces. His technical skills and ability to transform ideas into reality set them apart in frontend development",
    name: "Ryan",
    designation: "CTO",
    company: "Tplex",
  },
  {
    testimonial:
      "Zubair is a team player who fosters collaboration and inspires those around them. Their ability to mentor peers and align efforts ensures seamless teamwork and project success.",
    name: "Farhad",
    designation: "Product Manager",
    company: "Autoleap",
  },
];

const projects = [
  {
    name: "Car Rent",
    live_url: 'sssssssss',
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

const certificates = [
  {
    name: "React with .Net",
    live_url: 'sssssssss',
    image: reactCertificate,
    link: "https://github.com/",
  },
  {
    name: "Angular Master",
    live_url: 'sssssssss',
    image: angularMastering,
    link: "https://github.com/",
  },
  {
    name: "Javascript Web Development",
    image: jsWebDevelopment,
    link: "https://github.com/",
  },
  {
    name: "Agile Scrum ",
    image: agileScrum,
    link: "https://github.com/",
  },
];

export { services, technologies, experiences, education, testimonials, certificates, projects };
