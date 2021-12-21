import React, { ReactElement } from "react";
import Loader from "./Loader";

interface Props {
  loading: boolean;
}

export default function SubmitButton({ loading }: Props): ReactElement {
  return (
    <button
      type="submit"
      className={`ml-auto mt-4 font-bold bg-white rounded-lg text-neutral-800 px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50 flex items-center`}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader />
          Loading...
        </>
      ) : (
        "Send!"
      )}
    </button>
  );
}
