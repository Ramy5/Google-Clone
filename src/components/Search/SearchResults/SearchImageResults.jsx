import Link from "next/link";
import React from "react";

const SearchImageResults = ({ results }) => {
  return (
    <>
      <div className="px-8 mt-4 w-full mx-auto pb-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {results.items.map((result) => {
          return (
            <div key={result.link} className="cursor-pointer">
              <div className="group">
                <Link href={result.image.contextLink}>
                  <img
                    src={result.link}
                    alt={result.title}
                    className="object-contain mb-4 group-hover:shadow-xl transition-all duration-200 h-60 w-full"
                  />
                </Link>
                <Link
                  className="font-semibold group-hover:underline group-hover:decoration-cyan-500 group-hover:text-cyan-500 text-lg visited:text-blue-600 active:text-blue-600"
                  href={result.image.contextLink}
                >
                  <h2 className="truncate">{result.title}</h2>
                </Link>
                <Link
                  className="group-hover:underline text-gray-600"
                  href={result.image.contextLink}
                >
                  <p className="truncate">{result.displayLink}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchImageResults;
