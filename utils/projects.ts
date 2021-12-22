import { ProjectList } from "./../interfaces/projects";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiChakraui,
  SiFirebase,
} from "react-icons/si";

const projects: ProjectList[] = [
  {
    name: "BS Matcher",
    description:
      "BS Matcher was the first, major project I worked on. It allowed users to take their Spotify or YouTube playlist, and convert into a playable playlist in Beat Saber. Whilst the actual purpose was relatively trivial, I decided to test myself by adding cool features, like user authentication, payments, a fully fledged dashboard, a settings page, and a secured API. I really enjoyed working on this project, and it is one of my favourites",
    image: [
      "/projects/BS-Matcher/home.png",
      "/projects/BS-Matcher/playlists.png",
    ],
    link: {
      github: "#form",
      live: "https://www.bsmatcher.com/",
    },
    tags: ["Next.js", "MongoDB", "TailwindCSS", "React", "Typescript"],
  },
  {
    name: "infinito",
    description:
      "A fairly simple image board that allowed users to submit their own photos. Made with Chakra-UI, and Firebase, it featured an infinite image board, user authentication and added content, as well as NSFW detection",
    image: ["/projects/infinito/home.png", "/projects/infinito/add.png"],
    link: {
      github: "https://github.com/MartyMcKnife/infinito",
      live: "https://infinito.vercel.app/",
    },
    tags: ["Next.js", "Chakra-UI", "Firebase", "React", "Typescript"],
  },
  {
    name: "Card-Games",
    description:
      "Created for a school project, this was a relatively simple website that allowed the user to play a variety of card games against an AI, or simulate rounds to see how much they could win/lose",
    image: ["/projects/Card-Games/home.png", "/projects/Card-Games/game.png"],
    link: {
      github: "https://github.com/MartyMcKnife/card-games",
      live: "https://card-games.vercel.app/",
    },
    tags: ["Next.js", "Chakra-UI", "Firebase", "React", "Typescript"],
  },
];

export default projects;

export const lookup = {
  "Next.js": SiNextdotjs,
  MongoDB: SiMongodb,
  TailwindCSS: SiTailwindcss,
  React: SiReact,
  Typescript: SiTypescript,
  "Chakra-UI": SiChakraui,
  Firebase: SiFirebase,
};

export type Tags = keyof typeof lookup;
