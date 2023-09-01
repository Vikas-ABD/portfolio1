import {
    mobile,
    codepen,
    ecommerce,
    todolist,
    backend,
    creator,
    web,
    MachineLearning,
    javascript,
    typescript,
    onestop,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    internship_studio,
    internshala,
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
      title: "Front-end Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML Engineer",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Machine Learning",
      icon: MachineLearning,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Website Design",
      company_name: "Internship Studio",
      icon: internship_studio,
      iconBg: "#383E56",
      date: "May 2022 - June 2022",
      points: [
        "Completed 5-week internship at Internship Studio focused on Website Design.",
        "Developed proficiency in HTML, CSS, JavaScript, and Bootstrap.",
        "Designed and built an e-commerce website as part of the internship project.",
        "Gained hands-on experience in creating engaging and user-friendly web interfaces.",
      ],
    },
    {
      title: "Bhumi",
      company_name: "INTERNSHALA",
      icon: internshala,
      iconBg: "#E6DEDD",
      date: "June 2021 - July 2021",
      points: [
        "Actively participating in fundraising campaigns and initiatives to support COVID relief efforts.",
        "Assisting in organizing and promoting fundraising events, both online and offline.",
        "Engaging with potential donors and explaining the purpose and impact of the fundraising activities.",
        "Collaborating with the team to develop innovative strategies for maximizing donations and reaching fundraising goals.",
      ],
    },

    {
      title: "Wissenaire IIT Bhubaneswar",
      company_name: "1Stop",
      icon: onestop,
      iconBg: "#383E56",
      date: "Present",
      points: [
        "Interning at 1Stop in association with Wissenaire IIT Bhubaneswar",
        "Gaining practical experience through industrial training and live projects.",
        "Participating in internships and preparing for future placements.",
        "Enhancing skills through mock tests for career advancement.",
      ],
    },
   
  ];
  
  
  
  const projects = [
    {
      name: "Codepen clone",
      description:
        "Web-based platform that allows users to write, edit, and share HTML, CSS, and JS code snippets. It provides a user-friendly interface for developers to experiment with code.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
      
      ],
      image: codepen,
      source_code_link: "https://github.com/Isheka123/codepen-clone",
    },
    {
      name: "Ecommerce",
      description:
        "Web-based platform for seamless e-commerce. Discover, explore, and purchase products effortlessly with user-friendly features and a secure checkout process.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/Isheka123/Ecommerce",
    },
    {
      name: "ToDo List",
      description:
        "My TodoList web application, enabling users to efficiently manage and organize their tasks. With a user-friendly interface and robust functionality, it simplifies task management and boosts productivity.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "ejs",
          color: "green-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://github.com/Isheka123/todolist",
    },
  ];
  
  export { services, technologies, experiences, projects };