import Hero from "../components/Hero";
import React, { ReactElement, useState } from "react";
import AboutMe from "../components/AboutMe";
import Tools from "../components/Tools/Tools";
import Projects from "../components/Projects/Projects";

export default function Index(): ReactElement {
  const [content, setContent] = useState(false);
  return (
    <div className="bg-neutral-800 ">
      <Hero content={content} setContent={setContent} />
      {content && (
        <>
          <AboutMe />
          <Tools />
          <Projects />
        </>
      )}
    </div>
  );
}
