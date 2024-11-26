import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm passionate about crafting digital wonders and solving problems with lines of code.
Enthusiastic in Full Stack applications, let's connect and build something extraordinary together`;

export const ABOUT_TEXT = `I’m Sujeevanan Loganathan, a Computer Science undergraduate at Eastern University. I have a strong foundation in technology and problem-solving, and I thrive on creating innovative solutions. I’m fluent in English, Tamil, and Sinhala languages, which enhances my ability to communicate and collaborate with diverse teams.  

Outside of academics, I’ve had the honor of captaining my university's karate team and representing my skills in international games, showcasing my leadership and determination. I’m also passionate about reading books and actively participating in sports practices, which keep me grounded and motivated.  
`;

export const PROJECTS = [
  {
    title: "Food-Delivery Website",
    image: project1,
    description:
      "Built with the MERN stack (MongoDB, Express.js, React, Node.js), this web application enables users to browse the food items and place orders seamlessly. The admin dashboard allows restaurant owner to manage orders, update restaurant details, and track customer information. With a responsive design and real-time updates, this project demonstrates my skills in full-stack development and creating user-friendly applications.",
    technologies: [
      "TailwindCSS",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Firebase",
    ],
  },
  {
    title: "Resource Allocation System Using Genetic Algorithm",
    image: project2,
    description:
      "Built with the MERN stack and a Python backend, this web application uses a genetic algorithm to optimize resource allocation for scheduling. It allows users to generate timetables based on specific constraints, with the Python backend handling the algorithmic logic and the React frontend providing an intuitive interface. This project highlights my skills in combining algorithms with web technologies for efficient resource management",
    technologies: [
      "TailwindCSS",
      "React",
      "Firebase",
      "Python",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind CSS", "React"],
  },
  {
    title: "Advanced To do APP",
    image: project4,
    description:
      "Built with the MERN stack, this app features user authentication for secure task management. Users can create, edit, and organize tasks with real-time updates and a responsive design. This project showcases my ability to develop secure, dynamic web applications with a focus on usability.",
    technologies: [
      "React",
      "TailwindCSS",
      "Mongo DB",
      "Node.js",
      "Express.js",
      "Firebase",
    ],
  },
];

export const CONTACT = {
  address: "Temple Road Hettigewatta Kahawatta ",
  phoneNo: "+94 76 31 27 299",
  email: "lsujee2000@gmail.com",
};
