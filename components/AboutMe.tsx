import React, { ReactElement } from "react";

export default function AboutMe(): ReactElement {
  return (
    <div className="bg-sky-800 text-white px-16 md:px-24 py-12">
      <div className="flex justify-start items-center gap-6">
        <h1 className="font-bold text-5xl">About Me</h1>
        <hr className="w-64 border-2 rounded-full" />
      </div>
      <p className="font-light text-xl mt-6">
        I love to solve problems. I love trying to work out how best to do
        things, how to make the user feel happy and conformtable with whatever
        they are doing. Web development is no different. I always make sure the
        user will enjoy the site, from the moment they see the site, to when
        they start to interact with it.
        <br />
        <br />
        Outside of coding, I love to solve engineering problems, desiging and
        building little toys and contraptions of my own.
        <br />
        <br />I also enjoy playing video games, watching movies, or doing some
        sim racing
      </p>
    </div>
  );
}
