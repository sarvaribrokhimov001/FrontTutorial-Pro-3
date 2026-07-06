import {FaReact, FaVuejs, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaDocker} from "react-icons/fa";
import {SiNextdotjs, SiVite, SiTypescript, SiMongodb, SiPostgresql, SiRedux, SiTailwindcss} from "react-icons/si";

const techIcons = [
  { name: "React", package: "fa", component: "<FaReact />", icon: <FaReact /> },
  { name: "Vue", package: "fa", component: "<FaVuejs />", icon: <FaVuejs /> },
  { name: "Node", package: "fa", component: "<FaNodeJs />", icon: <FaNodeJs /> },
  { name: "HTML", package: "fa", component: "<FaHtml5 />", icon: <FaHtml5 /> },
  { name: "CSS", package: "fa", component: "<FaCss3Alt />", icon: <FaCss3Alt /> },
  { name: "JS", package: "fa", component: "<FaJs />", icon: <FaJs /> },
  { name: "GitHub", package: "fa", component: "<FaGithub />", icon: <FaGithub /> },
  { name: "Docker", package: "fa", component: "<FaDocker />", icon: <FaDocker /> },
  { name: "NextJS", package: "si", component: "<SiNextdotjs />", icon: <SiNextdotjs /> },
  { name: "Vite", package: "si", component: "<SiVite />", icon: <SiVite /> },
  { name: "TypeScript", package: "si", component: "<SiTypescript />", icon: <SiTypescript /> },
  { name: "MongoDB", package: "si", component: "<SiMongodb />", icon: <SiMongodb /> },
  { name: "PostgreSQL", package: "si", component: "<SiPostgresql />", icon: <SiPostgresql /> },
  { name: "Redux", package: "si", component: "<SiRedux />", icon: <SiRedux /> },
  { name: "Tailwind", package: "si", component: "<SiTailwindcss />", icon: <SiTailwindcss /> }
];
export default techIcons;