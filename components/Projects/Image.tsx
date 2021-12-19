import React, { ReactElement, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiX } from "react-icons/bi";
import { useDetectClickOutside } from "react-detect-click-outside";

interface Props {
  src: string;
  name: string;
}

export default function Image({ src, name }: Props): ReactElement {
  const [enlarge, setEnlarge] = useState(false);
  return (
    <>
      <motion.img
        src={src}
        alt={`${name}-image`}
        className="
        max-w-[15rem] sm:max-w-sm xl:max-w-xl object-cover max-h-full rounded-lg cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setEnlarge(true)}
      />
      <AnimatePresence>
        {enlarge && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-opacity-60 bg-black fixed w-screen h-screen top-0 left-0 flex justify-center items-center px-8 md:px-16"
          >
            <>
              <div
                className="p-2 sm:p-1 bg-black bg-opacity-80 rounded-full top-6 sm:top-0 absolute cursor-pointer"
                onClick={() => setEnlarge(false)}
              >
                <BiX color="white" size="32" />
              </div>

              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                src={src}
                alt={`${name}-image`}
              />
            </>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
