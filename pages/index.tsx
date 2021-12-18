import Hero from "../components/Hero";
import React, { ReactElement, useState } from "react";

export default function Index(): ReactElement {
  const [content, setContent] = useState(false);
  return (
    <div className="bg-neutral-800 px-16 md:px-24 ">
      <Hero content={content} setContent={setContent} />
      {content && (
        <div className="text-white text-center">Overflowed content</div>
      )}
    </div>
  );
}
