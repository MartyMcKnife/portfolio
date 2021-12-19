import React, { ReactElement, useState } from "react";
import { IconType } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";
import Rating from "./Rating";

interface Props {
  name: string;
  Icon: IconType;
  description: string;
  timeUsing: number;
  confidence: number;
}

export default function ToolItems({
  name,
  Icon,
  description,
  timeUsing,
  confidence,
}: Props): ReactElement {
  const [info, setInfo] = useState(false);
  return (
    <div className="relative">
      <motion.div
        className="flex flex-col items-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setInfo(!info)}
      >
        <Icon size="40" color="#FFFFFF" />
        <h2 className="font-regular mt-2">{name}</h2>
      </motion.div>
      <AnimatePresence>
        {info && (
          <motion.aside
            className="h-auto absolute float-right bg-zinc-900 rounded-lg shadow-2xl left-20 top-0 z-10 px-2 py-2"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h1 className="font-bold text-white text-xl">Details</h1>
            <h2 className="text-left font-regular whitespace-nowrap">
              Confidence: <Rating rating={confidence} />
            </h2>
            <h2 className="text-left font-regular whitespace-nowrap">
              {" "}
              Year(s) learning: <span> {timeUsing} </span>
            </h2>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
