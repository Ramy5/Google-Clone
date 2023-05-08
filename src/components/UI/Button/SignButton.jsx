import React from "react";
import classes from "./SignButton.module.css";

const SignButton = ({ text }) => {
  return (
    <button
      className={`${classes.btn} hover:brightness-125 hover:-translate-y-1 hover:shadow-2xl active:-translate-y-px active:shadow-xl after:absolute after:top-0 after:left-0 after:bg-cyan-700 after:rounded-md after:w-full after:h-full after:-z-10 after:transition-all after:duration-300 hover:after:opacity-0 hover:after:scale-125 relative transition-all duration-300  bg-cyan-700 text-white text-md font-semibold py-2 px-6 rounded-md`}
    >
      {text}
    </button>
  );
};

export default SignButton;
