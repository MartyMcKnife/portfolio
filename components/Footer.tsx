import Link from "next/link";
import React, { ReactElement } from "react";
import { SiGithub } from "react-icons/si";

export default function Footer(): ReactElement {
  return (
    <footer className="flex justify-between items-center text-white font-light mx-10 sm:mx-16 md:mx-24 border-t-4 rounded-full px-6 pt-4 pb-4 ">
      <h1>© Sean McDougall</h1>
      <a
        href="https://github.com/MartyMcKnife"
        target="_blank"
        rel="noreferrer"
      >
        <SiGithub color="white" size="32" />
      </a>
    </footer>
  );
}
