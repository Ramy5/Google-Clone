"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  const resetErrorHandler = () => reset();

  return (
    <div className="w-[80%] mx-auto text-center pt-10">
      <h2 className="mb-8 text-2xl text-cyan-700">{error.message}</h2>
      <button
        className="overflow-hidden text-cyan-600 border border-cyan-600 py-2 px-6 block mx-auto text-xl relative transition-all duration-300 hover:text-white before:absolute before:w-full before:h-0 before:top-0 before:left-0 before:bg-cyan-600 before:transition-all before:duration-300 before:-z-10 before:rounded-br-full before:rounded-bl-full hover:before:h-[250%]"
        onClick={resetErrorHandler}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
