import React from "react";

const WebSearch = async ({ searchParams }) => {
  const searchWord = searchParams.searchTerm;

  const api = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT}&q=${searchWord}`
  );

  if (!api.ok) throw new Error("Something went wrong!");

  const data = await api.json();

  return (
    <>
      {data?.items.map((result) => (
        <h2>{result.title}</h2>
      ))}
    </>
  );
};

export default WebSearch;
