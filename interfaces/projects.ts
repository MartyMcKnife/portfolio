import { Tags } from "../utils/projects";

export interface ProjectList {
  name: string;
  description: string;
  image: string[];
  link: {
    github: string;
    live: string;
  };
  tags: Tags[];
}
