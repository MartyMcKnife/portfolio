import Hero from "../components/Hero";
import React, { ReactElement, useState } from "react";
import AboutMe from "../components/AboutMe";
import Tools from "../components/Tools/Tools";

export default function Index(): ReactElement {
  const [content, setContent] = useState(false);
  return (
    <div className="bg-neutral-800 ">
      <Hero content={content} setContent={setContent} />
      {content && (
        <>
          <AboutMe />
          <Tools />
        </>
      )}
    </div>
  );
}
