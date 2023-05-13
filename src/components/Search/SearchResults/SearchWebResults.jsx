import Link from "next/link";
import React from "react";
import parse from "html-react-parser";

const SearchWebResults = ({ results }) => {
  return (
    <div className="w-full mx-auto pb-44 md:pb-28 px-8 md:pl-24 lg:pl-48">
      <p className="text-gray-600 text-sm mb-4">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => {
        return (
          <div className="mb-6 max-w-xl flex flex-col" key={result.cacheId}>
            <Link
              className="truncate text-sm text-gray-700 hover:underline"
              href={result.link}
            >
              {result.formattedUrl}
            </Link>
            <Link
              className="text-xl truncate font-semibold text-cyan-800 hover:underline hover:decoration-cyan-700 group-hover:underline group-hover:decoration-cyan-800 visited:text-blue-600 active:text-blue-600"
              href={result.link}
            >
              {result.title}
            </Link>
            <p className="text-sm text-gray-600">{parse(result.htmlSnippet)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchWebResults;
