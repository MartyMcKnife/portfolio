import React, { ReactElement, useEffect, useState } from "react";
import { useViewportScroll, motion, AnimatePresence } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";

export default function Hero(): ReactElement {
  const { scrollYProgress } = useViewportScroll();
  const [intro, setIntro] = useState(false);
  useEffect(() => {
    if (scrollYProgress.get() > 0.1) {
      setIntro((state) => !state);
    }
  }, [scrollYProgress]);

  return (
    <div className="font-bold text-6xl md:text-8xl pb-24 w-full text-white h-full">
      <AnimatePresence>
        {intro ? (
          <>
            <motion.h1
              initial={{ y: "110vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-110vh" }}
              transition={{ type: "spring", stiffness: 60, mass: 0.6 }}
              className="whitespace-nowrap"
            >
              {/* Chrome has a weird bug where bolded emojis go black and white */}
              {/* To fix this, we just use a span and override it */}
              Hi <span className="font-normal">&#128075;</span>
            </motion.h1>
          </>
        ) : (
          <>
            <motion.h1
              initial={{ y: "110vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-110vh" }}
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
            <motion.div
              className="w-full flex justify-center items-center pt-24"
              animate={{ opacity: [0, 0, 1, 1, 1, 1, 0, 0] }}
              transition={{
                delay: 1.5,
                transition: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1,
              }}
            >
              <Link href="#about" passHref>
                <BiChevronDown className="cursor-pointer" />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
