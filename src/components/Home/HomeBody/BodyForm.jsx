"use client";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import classes from "./BodyForm.module.css";

const BodyForm = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [randomIsLoading, setRandomIsLoading] = useState(false);

  const inputChangeHandler = (e) => setSearchValue(e.target.value);

  // HANDLE THE SEARCH WORD
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchValue.trim().length === 0) return;

    router.push(`/search/web?searchTerm=${searchValue.trim()}`);

    setSearchValue("");
  };

  // HANDLE THE RANDOM WORD
  const getRandomWord = async () => {
    setRandomIsLoading(true);
    const api = await fetch("https://random-word-api.herokuapp.com/word");
    if (!api.ok) return;

    const data = await api.json();

    router.push(`search/web?searchTerm=${data[0]}`);
    setRandomIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <form
        onSubmit={submitHandler}
        className="flex w-full mb-8 items-center transition-shadow duration-200 border border-gray-200 px-6 rounded-full max-w-[90%] sm:max-w-xl lg:max-w-2xl hover:shadow-md focus-within:shadow-md"
      >
        <AiOutlineSearch
          onClick={submitHandler}
          className="mr-4 text-xl text-gray-500 hover:scale-110 cursor-pointer"
        />
        <input
          onChange={inputChangeHandler}
          type="text"
          name="Search"
          value={searchValue}
          className="flex-grow py-3 focus:outline-none"
        />
        <BsFillMicFill className="mr-2 text-xl text-cyan-600 hover:scale-110 cursor-pointer" />
        <AiOutlineCamera className="text-xl text-cyan-600 hover:scale-110 cursor-pointer" />
      </form>

      <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-6">
        <button
          onClick={submitHandler}
          className="home-btn before:-rotate-90 before:origin-bottom-left"
        >
          Google Search
        </button>
        <button
          onClick={getRandomWord}
          disabled={randomIsLoading}
          className={`${classes.btn__rotate} flex justify-center items-center disabled:pointer-events-none animate-bounce home-btn after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-cyan-400 hover:after:rotate-0 after:-z-10 after:transition-transform after:duration-200`}
        >
          {randomIsLoading ? (
            <img
              src="random-word-loading.svg"
              className="h-6 text-center"
              alt="Loading..."
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </div>
  );
};

export default BodyForm;
