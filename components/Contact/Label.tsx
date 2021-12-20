import React, { ReactElement } from "react";

interface Props {
  text: string;
  htmlFor: string;
  className?: string;
}

export default function Label({
  text,
  htmlFor,
  className,
}: Props): ReactElement {
  return (
    <label className={`font-semibold text-2xl ${className}`} htmlFor={htmlFor}>
      {text}
    </label>
  );
}
