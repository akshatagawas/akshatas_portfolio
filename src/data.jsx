import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

/* Skill icons */
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaPython, FaJava, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiMysql, DiMongodb  } from "react-icons/di";
import { AiOutlineKubernetes } from "react-icons/ai";



import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/projects',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'June 2023 - August 2023',
    title: 'Software Engineering Intern <span> Tech For Good Inc. </span>',
    desc: 'Kubernetes, Docker, AWS, GCP',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'December 2021 - March 2022',
    title: 'Full Stack Developer Intern <span> Virtusa Pvt. Ltd. </span>',
    desc: 'Spring Boot, ReactJS, MySQL, RESTful APIs',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'August 2022 - May 2024',
    title: 'Master of Science <span> Indiana University Bloomington </span>',
    desc: 'Major: Computer Science',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'August 2018 - May 2022',
    title: 'Bachelor of Engineering <span> University of Mumbai </span>',
    desc: 'Major: Information Technology',
  },


];

export const skills = [
  {
    id: 1,
    title: 'Html',
    icon: <FaHtml5 />,
  },

  {
    id: 2,
    title: 'Javascript',
    icon: <IoLogoJavascript />,
  },

  {
    id: 3,
    title: 'Css',
    icon: <FaCss3 />,
  },

  {
    id: 4,
    title: 'React',
    icon: <FaReact />,
  },

  {
    id: 5,
    title: 'Spring Boot',
    icon: <BiLogoSpringBoot />,
  },

  {
    id: 6,
    title: 'NodeJS',
    icon: <FaNodeJs />,
  },

  {
    id: 7,
    title: 'Python',
    icon: <FaPython />,
  },

  {
    id: 8,
    title: 'Java',
    icon: <FaJava />,
  },

  {
    id: 9,
    title: 'SQL',
    icon: <DiMysql />,
  },
  {
    id: 10,
    title: 'MongoDB',
    icon: <DiMongodb />
  },

  {
    id: 11,
    title: 'Docker',
    icon: <FaDocker  />,
  },

  {
    id: 12,
    title: 'Kubernetes',
    icon: <AiOutlineKubernetes />
    ,
  },

];

export const projects = [
  {
    id: 1,
    img: Work1,
    title: 'Portfolio in Vite + ReactJS',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Responsive Website in ReactJS',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Vite + ReactJS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://akshatagawas.github.io/akshatas_portfolio',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Health Harbor',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Patient and Insuarance Management Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Academic Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React + Spring Boot + MySQL',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://drive.google.com/file/d/1LWB_qumxfyBTcgXe-AkzAu7aAU1UvjDV/view?usp=drive_link',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'BlogSite',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website for Tech Blogs',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN stack',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/akshatagawas/blogsite',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Crypto Tracker',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website to track Crypto Prices',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS + ChartJS + MUI',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://crypto-hunter.netlify.app/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Customer Repository',
    details: [
      {
        title: 'Project : ',
        desc: 'CRUD operations ',
      },
      {
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        title: 'Language : ',
        desc: 'MEAN Stack',
      },
      {
        title: 'Preview : ',
        desc: 'https://github.com/akshatagawas/mean-stack-application',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'EKS Cluster Deployment',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Deploy app on EKS using Python',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'AWS EKS, Docker, Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/akshatagawas/EKS-deployment-with-Python',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
