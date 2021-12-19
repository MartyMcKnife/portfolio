import React, { ReactElement } from "react";
import Title from "../Title";
import projects from "../../utils/projects";
import Project from "./Project";

export default function Projects(): ReactElement {
  return (
    <section className="px-16 md:px-24 py-12 text-white">
      <Title>Projects</Title>
      {projects.map((project, index) => (
        <Project
          {...project}
          key={project.name + index}
          flip={index % 2 > 1 ? true : false}
        />
      ))}
    </section>
  );
}
