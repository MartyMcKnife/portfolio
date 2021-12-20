import React, { ReactElement } from "react";

interface Props {
  text: string;
  htmlFor: string;
}

export default function Label({ text, htmlFor }: Props): ReactElement {
  return (
    <label className="font-semibold text-2xl" htmlFor={htmlFor}>
      {text}
    </label>
  );
}
