import Image from "next/image";
import React from "react";
import SearchForm from "./SearchForm";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SignButton from "@/components/UI/Button/SignButton";
import Link from "next/link";

const SearchHeader = () => {
  return (
    <header className="py-6 px-8 sticky top-0 z-50">
      <div className="flex justify-between items-center flex-wrap mb-6">
        <Link href={"/"}>
          <Image
            className="mr-6"
            width={120}
            height={40}
            style={{ width: "120px", height: "40px" }}
            src={"/google-logo.png"}
            alt="Google Logo"
          />
        </Link>

        <SearchForm />

        <div className="mr-4 ml-4 space-x-2 justify-center hidden md:flex">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>

        <SignButton text="Sign in" />
      </div>

      <div className="">Search Header Option</div>
    </header>
  );
};

export default SearchHeader;
