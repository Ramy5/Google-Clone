import SearchImageResults from "@/components/Search/SearchResults/SearchImageResults";
import React from "react";

const ImageSearch = async ({ searchParams }) => {
  const searchWord = searchParams.searchTerm;
  const searchStart = searchParams.start || 1;

  // WAIT JUST ONE SECOND
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const api = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT}&q=${searchWord}&searchType=image&start=${searchStart}`
  );

  if (!api.ok)
    throw new Error("Something went wrong!, please check your internet");

  const data = await api.json();

  if (!data.items)
    throw new Error(
      "There is no results for this search, please try another word"
    );

  return <>{data?.items && <SearchImageResults results={data} />}</>;
};

export default ImageSearch;
