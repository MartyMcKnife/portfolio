import React, { ReactElement } from "react";
import toolList from "../../utils/tools";
import ToolItems from "./ToolItems";

interface Props {
  title: "Frontend" | "Backend" | "Misc";
}

export default function ToolBox({ title }: Props): ReactElement {
  const tools = toolList[title].map((tool, i) => (
    <ToolItems {...tool} key={`${title}/${i}`} />
  ));
  return (
    <div className="h-full rounded-lg text-center">
      <h1 className="text-2xl sm:text-4xl font-normal mt-4">{title}</h1>
      <div className="bg-neutral-900 rounded-lg inline-grid grid-cols-[auto_auto] py-6 px-4 gap-4 mt-4">
        {tools}
      </div>
    </div>
  );
}
