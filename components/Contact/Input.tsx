import React, { ReactElement } from "react";

interface Props {
  required?: boolean;
  placeholder: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

export default function Input({
  required,
  placeholder,
  type,
  value,
  onChange,
  id,
}: Props): ReactElement {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="bg-inherit border-b-2 max-w-lg text-xl px-4 py-2 text-white rounded-lg"
      value={value}
      onChange={onChange}
      required={required}
      id={id}
    />
  );
}
