"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Pagination = () => {
  const path = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const start = +searchParams.get("start") || 1;

  return (
    <div className="mt-12 flex justify-center sm:justify-start items-center space-x-8 col-start-1 col-end-last">
      {start > 10 && (
        <Link href={`${path}?searchTerm=${searchTerm}&start=${start - 10}`}>
          <MdKeyboardArrowLeft className="w-8 h-8 bg-cyan-500 text-white rounded-md text-lg hover:bg-sky-700 transition-all duration-200" />
        </Link>
      )}
      <p className="text-2xl font-bold text-cyan-600 border-b-4 border-cyan-600 mb-2">
        {start >= 11 ? Math.trunc(start / 10) + 1 : 1}
      </p>
      {start < 81 && (
        <Link href={`${path}?searchTerm=${searchTerm}&start=${start + 10}`}>
          <MdKeyboardArrowRight className="w-8 h-8 bg-cyan-500 text-white rounded-md text-lg hover:bg-sky-700 transition-all duration-200" />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
