import {
    
    simulink,
    raspi,
    mlops,
    keras,
    iot,
    deep,
    digital_twin,
    computer_vision,
    cicd,
    azure,
    azure_iot,
    mobile,
    codepen,
    flask,
    ecommerce,
    iiit,
    todolist,
    backend,
    creator,
    web,
    MachineLearning,
    git,
    
    
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
      title: "ML Engineer",
      icon: web,
    },
    {
      title: "Computer Vision Using Deep Learning",
      icon: mobile,
    },
    {
      title: "IOT Developer",
      icon: backend,
    },
    {
      title: "Matlab/Simulink Expertise",
      icon: creator,
    },
  ];
  
  const technologies = [
  
    {
      name: "Simulink",
      icon: simulink,
    },
    {
      name: "Keras",
      icon: keras,
    },
    {
      name: "Raspberry Pi",
      icon: raspi,
    },
    {
      name: "MLOps",
      icon: mlops,
    },
    {
      name: "IoT",
      icon: iot,
    },
    {
      name: "Deep Learning",
      icon: deep,
    },
    {
      name: "Digital Twin",
      icon: digital_twin,
    },
    {
      name: "Computer Vision",
      icon: computer_vision,
    },
    {
      name: "CICD",
      icon: cicd,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "Azure IoT",
      icon: azure_iot,
    },
    {
      name: "Flask",
      icon: flask,
    },


    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Machine Learning",
      icon: MachineLearning,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Vision Intern",
      company_name: "IIIT SRICITY",
      icon: iiit,
      iconBg: "#383E56",
      date: "May 2023 - July 2023",
      points: [
        "Advanced Aerial Mapping (AAM) Rider:  Yield Detection System for Mango Farms using UAVs",
        "Develop a solution for yield detection in mango farms using UAVs and advanced technologies like IoTs and Computer Vision using Deep Learning..",
        "Process collected data with object detection techniques to accurately identify mango fruits and measure yield in mango farms.",
        "Working on this innovative project during my internship, focused on automated helipad detection and drone charging using deep learning technology."
      ],
    },
    {
      title: "Research Assistant Intern",
      company_name: "IIIT SRICITY",
      icon: iiit,
      iconBg: "#E6DEDD",
      date: "May 2022 - July 2022",
      points: [
        "Diffraction by a straight edge in a curved screen and Implementing MOM(Method Of Moment) on half wave dipole.",
        "Deriving the field equations and implementing in MATLAB.",
        "Analyzing the field pattern and radiation of a half-wave dipole antenna using the Method of Moments (MoM) in MATLAB."
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