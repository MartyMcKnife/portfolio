import React, { ReactElement } from "react";
import { IconType } from "react-icons/lib";
import { lookup, Tags } from "../../utils/projects";

interface Props {
  name: Tags;
}

export default function Tag({ name }: Props): ReactElement {
  const Icon = lookup[name];
  return (
    <div className="rounded-full bg-gray-700 flex text-white w-max justify-center items-center px-2.5 py-0.25">
      <Icon />
      <h1 className="ml-1">{name}</h1>
    </div>
  );
}
