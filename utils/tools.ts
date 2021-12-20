import { toolsList } from "./../interfaces/tools";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiGit,
  SiFigma,
  SiVercel,
  SiDigitalocean,
} from "react-icons/si";

const toolInfo: toolsList = {
  Frontend: [
    {
      name: "HTML",
      Icon: SiHtml5,
      description:
        "HTML is the standard markup language for describing the structure of Web pages.",
      confidence: 5,
      timeUsing: 2019,
    },
    {
      name: "CSS",
      Icon: SiCss3,
      description:
        "CSS is a language used for describing the presentation of a document written in HTML or XML.",
      confidence: 5,
      timeUsing: 2019,
    },

    {
      name: "JavaScript",
      Icon: SiJavascript,
      description:
        "Javascript is the language used for adding interactivity to web pages, like the one your own right now!",
      confidence: 4.5,
      timeUsing: 2019,
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      description: "TypeScript is a superset of JavaScript, with typings",
      confidence: 3.5,
      timeUsing: 2020,
    },
    {
      name: "React",
      Icon: SiReact,
      description:
        "React is a JavaScript library for building user interfaces.",
      confidence: 4.5,
      timeUsing: 2020,
    },
    {
      name: "Next.js",
      Icon: SiNextdotjs,
      description:
        "Next.js is a framework for building fast, modern websites. It extends React, by compiling it on the server, creating blazing fast web pages",
      confidence: 4,
      timeUsing: 2020,
    },
    {
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
      description:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom, high performance CSS components.",
      confidence: 5,
      timeUsing: 2020,
    },
    {
      name: "Chakra UI",
      Icon: SiChakraui,
      description:
        "Chakra UI is a React UI library with a focus on simplicity and performance.",
      confidence: 3.5,
      timeUsing: 2021,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      Icon: SiNodedotjs,
      description:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, that can run server-side.",
      confidence: 4.5,
      timeUsing: 2019,
    },
    {
      name: "Express",
      Icon: SiExpress,
      description:
        "Express is a minimal and flexible Node.js framework designed for building APIs",
      confidence: 4,
      timeUsing: 2019,
    },
    {
      name: "MongoDB",
      Icon: SiMongodb,
      description: "MongoDB is a document-oriented database program.",
      confidence: 4,
      timeUsing: 2020,
    },
    {
      name: "Firebase",
      Icon: SiFirebase,
      description:
        "Firebase is a cloud-based database and authentication platform for web, mobile and server-side applications.",
      confidence: 3,
      timeUsing: 2021,
    },
  ],
  Misc: [
    {
      name: "Git",
      Icon: SiGit,
      description:
        "Git is a version control system for tracking changes in source code during software development.",
      confidence: 4,
      timeUsing: 2018,
    },
    {
      name: "Figma",
      Icon: SiFigma,
      description:
        "Figma is a tool for designing and prototyping digital products.",
      confidence: 5,
      timeUsing: 2020,
    },
    {
      name: "Vercel",
      Icon: SiVercel,
      description: "Vercel is a hosting platform for static websites.",
      confidence: 4,
      timeUsing: 2020,
    },
    {
      name: "Digital Ocean",
      Icon: SiDigitalocean,
      description: "Digital Ocean is a cloud hosting service.",
      confidence: 3,
      timeUsing: 2021,
    },
  ],
};

export default toolInfo;
