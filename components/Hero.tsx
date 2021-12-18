import React, { ReactElement, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";

interface Props {
  content: boolean;
  setContent: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Hero({ content, setContent }: Props): ReactElement {
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIntro(false);
      clearInterval(interval);
    }, 2000);

    const interval2 = setInterval(() => {
      setContent(true);
      clearInterval(interval2);
    }, 3500);
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, [setContent, setIntro]);

  return (
    <div
      className={`h-screen w-full font-bold text-6xl md:text-8xl text-white flex flex-col ${
        content ? "" : "overflow-y-hidden"
      }`}
    >
      <div className=" h-full flex items-center justify-center md:justify-start">
        <AnimatePresence exitBeforeEnter>
          {intro ? (
            <motion.h1
              initial={{ y: "110vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-110vh", opacity: 0 }}
              transition={{ type: "spring", stiffness: 60, mass: 0.6 }}
              className="whitespace-nowrap"
            >
              {/* Chrome has a weird bug where bolded emojis go black and white */}
              {/* To fix this, we just use a span and override it */}
              Hi <span className="font-normal">&#128075;</span>
            </motion.h1>
          ) : (
            <section>
              <motion.h1
                initial={{ y: "110vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-110vh", opacity: 0 }}
                transition={{ type: "spring", stiffness: 60, mass: 0.6 }}
                className="whitespace-nowrap"
              >
                I&apos;m <span className="text-blue-600">Sean</span>
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-4xl font-medium mt-4"
                initial={{ y: "110vh" }}
                animate={{ y: 0 }}
                exit={{ y: "-110vh" }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  mass: 0.6,
                  delay: 0.2,
                }}
              >
                I love designing, programming and deploying websites
              </motion.h2>
            </section>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className={`w-full flex justify-center items-center ${
          intro ? "hidden" : ""
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1, 1, 1, 0] }}
        transition={{
          //Starts 1.5 seconds after Hi is gone
          delay: 3.5,
          transition: 1,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 0.5,
        }}
      >
        <Link href="#about" passHref>
          <BiChevronDown className="cursor-pointer" />
        </Link>
      </motion.div>
    </div>
  );
}
