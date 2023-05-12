import Link from "next/link";
import Image from "next/image";
import React from "react";
import SearchForm from "./SearchForm";
import SignButton from "@/components/UI/Button/SignButton";
import SearchOption from "../SearchOption/SearchOption";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

const SearchHeader = () => {
  return (
    <header className="py-4 px-6 md:py-6 md:px-8 sticky top-0 z-50 bg-white">
      <div className="flex items-center flex-wrap md:flex-nowrap mb-6">
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

        <div className="mr-4 ml-4 space-x-2 justify-center hidden lg:flex">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>

        <SignButton text="Sign in" className="ml-auto md:ml-0" />
      </div>

      <SearchOption />
    </header>
  );
};

export default SearchHeader;
