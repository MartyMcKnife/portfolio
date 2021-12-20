import React, { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import Label from "./Label";
import Input from "./Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SubmitButton from "./SubmitButton";
import emailjs from "emailjs-com";

const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export default function QuoteForm(): ReactElement {
  const [background, setBackground] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    site: "",
  });
  const [details, setDetails] = useState({
    description: "",
    deadline: new Date(),
    design: "",
    inspiration: "",
    budget: "$2,000",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE as string,
        process.env.NEXT_PUBLIC_QUOTE as string,
        {
          ...background,
          ...details,
          deadline: details.deadline.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
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
      className="w-full rounded-b-lg py-4 px-4 sm:px-12"
      onSubmit={handleSubmit}
    >
      <fieldset className="flex flex-col gap-y-2">
        <h1 className="font-bold text-3xl sm:text-4xl mb-4 italic">
          Background
        </h1>
        <Label text="Name" htmlFor="name" />
        <Input
          required
          placeholder="John Smith"
          type="text"
          value={background.name}
          onChange={(e) =>
            setBackground({ ...background, name: e.target.value })
          }
          id="name"
        />
        <Label text="Email" htmlFor="email" className="mt-4" />
        <Input
          required
          placeholder="john@example.com"
          type="email"
          value={background.email}
          onChange={(e) =>
            setBackground({ ...background, email: e.target.value })
          }
          id="email"
        />
        <Label text="Phone Number" htmlFor="phone" className="mt-4" />
        <Input
          required
          placeholder="Make sure to include country code!"
          type="tel"
          value={background.phone}
          onChange={(e) =>
            setBackground({ ...background, phone: e.target.value })
          }
          id="phone"
        />
        <Label text="Company Name" htmlFor="company" className="mt-4" />
        <Input
          placeholder="https://www.example.com"
          type="text"
          value={background.company}
          onChange={(e) =>
            setBackground({ ...background, company: e.target.value })
          }
          id="company"
        />
        <Label
          text="Current Website (if any)"
          htmlFor="site"
          className="mt-4"
        />
        <Input
          required
          placeholder="https://www.example.com"
          type="text"
          value={background.site}
          onChange={(e) =>
            setBackground({ ...background, site: e.target.value })
          }
          id="site"
        />
      </fieldset>
      <fieldset className="flex flex-col gap-y-2">
        <h1 className="font-bold text-3xl sm:text-4xl italic mt-12 mb-4">
          Details
        </h1>
        <Label text="Description" htmlFor="description" />
        <textarea
          required
          placeholder="Describe your project in a few words"
          value={details.description}
          className="bg-inherit border-b-2 max-w-lg text-xl px-4 py-2 text-white rounded-lg h-12"
          onChange={(e) =>
            setDetails({ ...details, description: e.target.value })
          }
          id="description"
        />
        <Label text="Deadline" htmlFor="deadline" className="mt-4" />
        <DatePicker
          selected={details.deadline}
          onChange={(date) =>
            setDetails({ ...details, deadline: date as Date })
          }
          className="bg-inherit border-b-2 max-w-lg text-xl px-4 py-2 text-white rounded-lg"
          minDate={addDays(new Date(), 1)}
          required
        />
        <Label
          text="Current Design (if any)"
          htmlFor="design"
          className="mt-4"
        />
        <Input
          placeholder="https://www.figma.com/"
          type="text"
          value={details.design}
          onChange={(e) => setDetails({ ...details, design: e.target.value })}
          id="design"
        />
        <Label
          text="Inspiration (if any)"
          htmlFor="inspiration"
          className="mt-4"
        />
        <textarea
          placeholder="Like Instagram, but with the background blue"
          className="bg-inherit border-b-2 max-w-lg text-xl px-4 py-2 text-white rounded-lg h-12"
          value={details.inspiration}
          onChange={(e) =>
            setDetails({ ...details, inspiration: e.target.value })
          }
          id="inspiration"
        />
        <Label text="Budget (USD)" htmlFor="budget" className="mt-4" />
        <input
          required
          placeholder="$2,000"
          value={details.budget}
          type="number"
          onChange={(e) =>
            setDetails({
              ...details,
              budget: e.target.value,
            })
          }
          className="bg-inherit border-b-2 max-w-lg text-xl px-4 py-2 text-white rounded-lg"
          id="budget"
          min="500"
          step="500"
        />
      </fieldset>
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
