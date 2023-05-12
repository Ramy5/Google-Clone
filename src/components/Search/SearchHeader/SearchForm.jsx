"use client";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";

const SearchForm = () => {
  const params = useSearchParams();
  const searchWord = params.get("searchTerm");
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(searchWord || "");

  const emptyFieldHandler = () => setSearchValue("");
  const searchChangeHandler = (e) => setSearchValue(e.target.value);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    router.push(`/search/web/?searchTerm=${searchValue}`);
    document.getElementById("input-form").blur();
  };

  return (
    <form
      onSubmit={searchSubmitHandler}
      className="md:mr-auto px-6 flex items-center flex-grow border border-gray-200 rounded-full shadow-lg order-3 md:order-none mt-6 md:mt-0 w-full md:max-w-md lg:max-w-xl xl:max-w-2xl"
    >
      <input
        id="input-form"
        type="text"
        name="Search"
        onChange={searchChangeHandler}
        value={searchValue}
        className="py-4 flex-grow focus:outline-none"
      />
      <RxCross2
        onClick={emptyFieldHandler}
        className="text-2xl lg:text-3xl text-gray-400 lg:mr-2 cursor-pointer hover:text-cyan-500 border-r-none lg:border-r-2 border-gray-300 pr-0 lg:pr-2"
      />
      <BsFillMicFill className="text-xl text-cyan-600 hover:scale-110 cursor-pointer mx-2 hidden lg:inline-flex" />
      <AiOutlineSearch
        onClick={searchSubmitHandler}
        className="text-xl cursor-pointer text-cyan-600 hover:scale-110 hidden lg:inline-flex"
      />
    </form>
  );
};

export default SearchForm;
