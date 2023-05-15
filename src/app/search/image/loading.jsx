import React from "react";

const loading = () => {
  return (
    <div className="pb-52 md:pl-24 lg:pl-48 px-8 mt-4 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div className="">
        <div className="mb-4 h-56 bg-gray-200 rounded-md w-full animate-pulse"></div>
        <div className="h-3 mb-2 bg-gray-200 rounded-md w-full animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded-md w-full animate-pulse"></div>
      </div>
      <div className="">
        <div className="mb-4 h-56 bg-gray-200 rounded-md w-full animate-pulse"></div>
        <div className="h-3 mb-2 bg-gray-200 rounded-md w-full animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded-md w-full animate-pulse"></div>
      </div>
      <div className="">
        <div className="mb-4 h-56 bg-gray-200 rounded-md w-full animate-pulse"></div>
        <div className="h-3 mb-2 bg-gray-200 rounded-md w-full animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded-md w-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default loading;
