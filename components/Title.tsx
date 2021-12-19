import React, { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
  barHighlight?: string;
}

export default function Title({ children, barHighlight }: Props): ReactElement {
  return (
    <div className="flex justify-start items-center gap-6">
      <h1 className="font-bold text-3xl sm:text-5xl whitespace-nowrap">
        {children}
      </h1>
      <hr
        className={`w-32 sm:w-64 border-2 rounded-full ${
          barHighlight || "text-white"
        }`}
      />
    </div>
  );
}
