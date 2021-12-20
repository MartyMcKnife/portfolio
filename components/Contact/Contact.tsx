import React, { ReactElement, useState } from "react";
import Title from "../Title";
import { BiFile, BiFileFind } from "react-icons/bi";
import { AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";
import { init } from "emailjs-com";

init("user_8JvyMH0PMS4rM3gYTZE1K");

export default function Contact(): ReactElement {
  const [form, setForm] = useState<"contact" | "quote">();
  const close = () => setForm(undefined);
  return (
    <section id="form" className="px-16 md:px-24 py-12 text-white">
      <Title>Contact</Title>
      <div className="flex justify-center w-full">
        <div className="inline-block mt-4">
          <div className="flex justify-center items-center">
            <button
              className={`max-w-lg border border-white rounded-l-lg flex flex-col items-center py-4 px-6 transition-all duration-150 hover:bg-white hover:text-black ${
                form === "contact" && "bg-white text-black"
              } ${form && "rounded-b-none"}`}
              onClick={() =>
                form === "contact" ? close() : setForm("contact")
              }
            >
              <BiFile size="80" />
              <h1 className="font-bold text-3xl">Ask a question</h1>
              <h2>
                Talk to me about web development, what my favourite framework
                is, or what my favourite computer game is
              </h2>
            </button>
            <button
              className={`max-w-lg border border-white rounded-r-lg flex flex-col items-center py-4 px-6 transition-all duration-150 hover:bg-white hover:text-black ${
                form === "quote" && "bg-white text-black"
              } ${form && "rounded-b-none"}`}
              onClick={() => (form === "quote" ? close() : setForm("quote"))}
            >
              <BiFileFind size="80" />
              <h1 className="font-bold text-3xl">Request a quote</h1>
              <h2>
                Tell me what you want to make and I&apos;ll try my best to give
                you a quick and reasonable (and free!) quote
              </h2>
            </button>
          </div>
          <AnimatePresence>
            {form === "contact" && <ContactForm />}
            {form === "quote" && <ContactForm />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
