"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";

const SearchOption = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const path = usePathname();
  const router = useRouter();

  const goToWebHandler = () =>
    router.push(`/search/web?searchTerm=${searchTerm}`);

  const gotToImageHandler = () =>
    router.push(`/search/image?searchTerm=${searchTerm}`);

  return (
    <div className="flex items-center justify-center select-none w-full lg:justify-start lg:pl-40 border-b text-gray-700">
      <div
        onClick={goToWebHandler}
        className={`search-option ${
          path === "/search/web" &&
          "!border-b-4 !border-cyan-600 !text-cyan-600"
        }`}
      >
        <AiOutlineSearch className="mr-1" />
        <p>All</p>
      </div>
      <div
        onClick={gotToImageHandler}
        className={`search-option ${
          path === "/search/image" &&
          "!border-b-4 !border-cyan-600 !text-cyan-600"
        }`}
      >
        <AiOutlineCamera className="mr-1" />
        <p>Image</p>
      </div>
    </div>
  );
};

export default SearchOption;
