import React, { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";
import Label from "./Label";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function ContactForm(): ReactElement {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    if (name && email && message) {
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE as string,
          process.env.NEXT_PUBLIC_CONTACT as string,
          {
            name,
            email,
            message,
            source: "Portfolio",
          }
        );
        setLoading(false);
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong, please try again later", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, width: "100%", height: 0, border: 0 }}
      animate={{
        height: "auto",
        opacity: 1,
        border: "1px solid #FFFFFF",
        borderTop: 0,
      }}
      exit={{ opacity: 0, height: 0 }}
      className="w-full rounded-b-lg py-4 px-4 sm:px-12 flex flex-col gap-y-2"
      onSubmit={handleSubmit}
    >
      <Label text="Name" htmlFor="name" />
      <Input
        placeholder="John Smith"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        required
      />
      <Label text="Email" htmlFor="email" className="mt-4" />
      <Input
        placeholder="john@example.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        id="email"
      />
      <Label htmlFor="message" text="Message" className="mt-4" />
      <textarea
        className="bg-inherit border-b-2 max-w-lg px-4 py-2 text-white text-xl rounded-lg h-12"
        placeholder="Hi 👋"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <SubmitButton loading={loading} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </motion.form>
  );
}
