import React, { ReactElement } from "react";
import Title from "../Title";
import ToolBox from "./ToolBox";

export default function Tools(): ReactElement {
  return (
    <section className="px-10 sm:px-16 md:px-24 py-12 text-white">
      <Title>Tools and Skills</Title>
      <div className="my-4 md:flex justify-around mt-8 ">
        <ToolBox title="Frontend" />
        <ToolBox title="Backend" />
        <ToolBox title="Misc" />
      </div>
    </section>
  );
}
