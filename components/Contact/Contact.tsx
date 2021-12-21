import React, { ReactElement, useState } from "react";
import Title from "../Title";
import { BiFile, BiFileFind } from "react-icons/bi";
import { AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";
import { init } from "emailjs-com";
import QuoteForm from "./QuoteForm";

init("user_8JvyMH0PMS4rM3gYTZE1K");

export default function Contact(): ReactElement {
  const [form, setForm] = useState<"contact" | "quote">();
  const close = () => setForm(undefined);
  return (
    <section id="form" className="px-10 sm:px-16 md:px-24 py-12 text-white">
      <Title>Contact</Title>
      <div className="flex justify-center w-full">
        <div className="inline-block mt-4">
          <div className="grid grid-cols-2">
            <button
              className={`max-w-lg border border-white rounded-l-lg flex flex-col items-center py-4 px-2 sm:px-6 transition-all duration-150 hover:bg-white hover:text-neutral-800 ${
                form === "contact" && "bg-white text-neutral-800"
              } ${form && "rounded-b-none"}`}
              onClick={() =>
                form === "contact" ? close() : setForm("contact")
              }
            >
              <BiFile className="w-12 h-12 sm:w-20 sm:h-20" />
              <h1 className="font-bold text-xl sm:text-3xl">Ask a question</h1>
              <h2 className="text-sm sm:text-base">
                Talk to me about web development, what my favourite framework
                is, or what my favourite computer game is
              </h2>
            </button>
            <button
              className={`max-w-lg border border-white rounded-r-lg flex flex-col items-center py-4 px-2 sm:px-6 transition-all duration-150 hover:bg-white hover:text-neutral-800 ${
                form === "quote" && "bg-white text-neutral-800"
              } ${form && "rounded-b-none"}`}
              onClick={() => (form === "quote" ? close() : setForm("quote"))}
            >
              <BiFileFind className="w-12 h-12 sm:w-20 sm:h-20" />
              <h1 className="font-bold text-xl sm:text-3xl ">
                Request a quote
              </h1>
              <h2 className="text-sm sm:text-base">
                Tell me what you want to make and I&apos;ll try my best to give
                you a quick and reasonable (and free!) quote
              </h2>
            </button>
          </div>
          <AnimatePresence>
            {form === "contact" && <ContactForm />}
            {form === "quote" && <QuoteForm />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
