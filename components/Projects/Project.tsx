import React, { ReactElement } from "react";
import { Tags } from "../../utils/projects";
import Tag from "./Tag";
import Image from "./Image";
import { motion } from "framer-motion";

interface Props {
  flip?: boolean;
  name: string;
  description: string;
  image: string[];
  link: {
    github: string;
    live: string;
  };
  tags: Tags[];
}

export default function Project({
  flip,
  name,
  description,
  image,
  link,
  tags,
}: Props): ReactElement {
  return (
    <div
      className={`mx-auto gap-4 mt-8 w-min ${flip ? "flex-row-reverse" : ""}`}
    >
      <article className="space-y-4 mt-6">
        <h1 className=" font-bold text-3xl sm:text-5xl">{name}</h1>
        <div className="flex flex-wrap gap-2 ">
          {tags.map((tag, index) => (
            <Tag name={tag} key={index} />
          ))}
        </div>
        <p className=" text-justify text-lg">{description}</p>
      </article>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
        <Image src={image[0]} name={name} />
        <Image src={image[1]} name={name} />
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
        <motion.button
          className="border-2 border-white px-2 py-1 rounded-xl font-bold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.github === "#form" ? (
            <a href="#form">Request Access</a>
          ) : (
            <a href={link.github} target="_blank" rel="noopener noreferrer">
              View code
            </a>
          )}
        </motion.button>
        <motion.button
          className="bg-white text-neutral-800 px-3 py-2 text-lg rounded-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href={link.live} target="_blank" rel="noopener noreferrer">
            View the site!
          </a>
        </motion.button>
      </div>
    </div>
  );
}
