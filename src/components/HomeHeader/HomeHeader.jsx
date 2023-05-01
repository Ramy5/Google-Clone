import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import classes from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <header className="flex justify-end py-6 px-8">
      <div className="flex items-center space-x-4">
        <Link
          className="hover:underline hover:text-cyan-700 transition-colors"
          href="https://gmail.com"
        >
          Gmail
        </Link>
        <Link
          className="hover:underline hover:text-cyan-700 transition-colors"
          href="https://google.images.com"
        >
          Images
        </Link>
        <TbGridDots className="text-4xl hover:bg-cyan-200 rounded-full transition duration-100 p-2 animate-spin" />
        <button
          className={`${classes.btn} hover:brightness-125 hover:-translate-y-1 hover:shadow-2xl active:-translate-y-px active:shadow-xl after:absolute after:top-0 after:left-0 after:bg-cyan-700 after:rounded-md after:w-full after:h-full after:-z-10 after:transition-all after:duration-300 hover:after:opacity-0 hover:after:scale-125 relative transition-all duration-300  bg-cyan-700 text-white text-md font-semibold py-2 px-6 rounded-md`}
        >
          Sign in
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
