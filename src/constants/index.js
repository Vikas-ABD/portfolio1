import {
    car,
    rainfall,
    drone,
    emg,
    baby,
    coco,
    rasp,
    dog,
    traffic,
    segmentation,
    pothole,
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
    // {
    //   name: "CICD",
    //   icon: cicd,
    // },
    {
      name: "Azure",
      icon: azure,
    },
    // {
    //   name: "Azure IoT",
    //   icon: azure_iot,
    // },
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
    // {
    //   name: "git",
    //   icon: git,
    // },
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
      name: "Pothole Detection",
      description:
        "Pothole Detection Using YOLOv8 and Flask is a cutting-edge solution enhancing road safety. By integrating YOLOv8's object detection capabilities with Flask, it offers real-time pothole detection through a user-friendly web app, mitigating accidents and improving road maintenance.",
      tags: [
        {
          name: "Deep Learning",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "blue-text-gradient",
        },

      
      ],
      image: pothole,
      source_code_link: "https://github.com/Vikas-ABD/Projects/tree/main/Computer%20Vision%20using%20Deep%20Learning%20%26%20Machine%20Learning/pothole_detection_using_YOLOV8",
    },
    {
      name: "Smart Car with Live Video Object Detection ",
      description:
        "Cutting-edge wireless-controlled smart car by integrating Raspberry Pi, Simulink, and YOLOv3 for live video object detection and live video stream over wifi to mobile phone and edge detection of video stream.",
      tags: [
        {
          name: "Simulink",
          color: "blue-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "green-text-gradient",
        },
        {
          name: "Raspberry pi",
          color: "blue-text-gradient",
        },
      ],
      image: car,
      source_code_link: "https://github.com/Vikas-ABD/Projects/tree/main/Matlab%20%26%20Simulink/Wireless-Controlled%20Smart%20Car%20with%20Live%20Video%20Object%20Detection%20via%20Raspberry%20Pi",
    },
    {
      name: "segmentation using DL",
      description:
        "Developed multiple deep learning models including U-Net+EfficientNet, and CSPDarknet-U-Net hybrids for image segmentation tasks across diverse datasets. Created individual Flask web applications for each model to offer easy online access to object segmentation capabilities",
      tags: [
        {
          name: "Deep Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
      ],
      image: segmentation,
      source_code_link: "https://github.com/Vikas-ABD/Projects/tree/main/Computer%20Vision%20using%20Deep%20Learning%20%26%20Machine%20Learning/segmentation_using_UNET",
    },
    {
      name: "Rainfall Forecasting Using MATLAB",
      description:
        "MATLAB's Econometrics Toolbox offers versatile tools like ARIMA and VAR models for rainfall forecasting, enabling accurate predictions by analyzing historical data. It also supports Bayesian analysis to explore relationships with environmental factors, aiding decisions in agriculture, water management, and disaster response.",
      tags: [
        {
          name: "matlab",
          color: "blue-text-gradient",
        },
        {
          name: "Statistics",
          color: "green-text-gradient",
        },
      ],
      image: rainfall,
      source_code_link: "https://in.mathworks.com/matlabcentral/fileexchange/128153-rainfall-forecasting-using-matlab?s_tid=prof_contriblnk",
    },
    {
      name: "Plastic_detection_using drone",
      description:
        "I Created a drone-based system that utilizes a Raspberry Pi to run a model for plastic detection on the ground. When excess plastic is identified, the data is transmitted via a 4G dongle to Azure IoT Hub, enabling real-time visualization and analysis using Power BI, enhancing environmental monitoring and management.",
      tags: [
        {
          name: "IOT",
          color: "blue-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "green-text-gradient",
        },
        {
          name: "Azure",
          color: "blue-text-gradient",
        },

      
      ],
      image: drone,
      source_code_link: "https://github.com/Vikas-ABD/plastic_detection_using_drone.git",
    },
    {
      name: "Human Activity classification",
      description:
        "In this project, I visualize EMG signals from various human body activities, extracting features from 8 muscle sensors. Employing ML algorithms like KNN and neural networks, we achieve an impressive average accuracy of approximately 70% across 20 different classes, showcasing effective EMG signal classification for diverse applications.",
      tags: [
        {
          name: "Matlab",
          color: "blue-text-gradient",
        },
        {
          name: "Deep Learning/ML",
          color: "green-text-gradient",
        }
      
      ],
      image: emg,
      source_code_link: "https://github.com/Vikas-ABD/Matlab_EMG_classification.git",
    },
    {
      name: "Baby Identification using DL/CV",
      description:
        "I developed a system leveraging deep learning and computer vision to extract features from images, enabling the identification of missing babies by comparing input images with a database of stored data. The project also includes a user-friendly web interface created using Flask.",
      tags: [
        {
          name: "Deep Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Computer vision",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        }
      
      ],
      image: baby,
      source_code_link: "https://github.com/Vikas-ABD/Projects/tree/main/Computer%20Vision/baby_identification_using_DL_and_CV",
    },
    
    {
      name: "coco-cola level and state detection",
      description:
        "I designed a mobile app that utilizes SSD MobileNet for real-time detection of Coca-Cola levels and ceiling conditions, offering valuable industrial utility. This innovative solution simplifies monitoring and maintenance tasks, enhancing efficiency and accuracy in industrial settings.",
      tags: [
        {
          name: "Deep Learning",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "mobile app",
          color: "green-text-gradient",
        }
      
      ],
      image: coco,
      source_code_link: "https://github.com/Vikas-ABD/coco-cola_level_state_detection.git",
    },
    {
      name: "DR Analysis with Raspi and NodeMCU",
      description:
        " This project thoroughly analyzes data rates using Raspberry Pi and NodeMCU devices. By examining distance-related variations and WiFi dongle transmitter capabilities, it provides comprehensive insights for optimizing wireless connectivity in diverse applications.",
      tags: [
        {
          name: "IOT",
          color: "blue-text-gradient",
        },
        {
          name: "Raspberry pi",
          color: "green-text-gradient",
        },
        {
          name: "networking",
          color: "green-text-gradient",
        }
      
      ],
      image: raspi,
      source_code_link: "https://github.com/Vikas-ABD/IOT-internet-of-Things/tree/main/raspi_to_raspi_video_stream",
    },
    {
      name: "Object detection in simulink",
      description:
        "I implemented real-time cat and dog detection using the YOLO object detection model in MATLAB. The project involved data annotation with the MATLAB Image Labeler tool, enabling efficient and accurate detection of cats and dogs in images within a Simulink environment.",
      tags: [
        {
          name: "simulink",
          color: "blue-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "green-text-gradient",
        },
        {
          name: "matlab",
          color: "green-text-gradient",
        }
      
      ],
      image: dog,
      source_code_link: "https://github.com/Vikas-ABD/object_detection_using_simulink.git",
    },
    {
      name: "Traffic Signs Classification web app",
      description:
        " I demonstrated my expertise in deep learning and web development using the Flask framework. I trained three top-performing models for traffic sign classification, allowing users to select their preferred model to classify road signs through a user-friendly web interface.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "green-text-gradient",
        }
      
      ],
      image: traffic,
      source_code_link: "https://github.com/Vikas-ABD/traffic_signs_classification.git",
    }




  ];
  
  export { services, technologies, experiences, projects };