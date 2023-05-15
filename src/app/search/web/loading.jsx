import React from "react";

const loading = () => {
  return (
    <div className="w-full mx-auto px-8 md:pl-24 lg:pl-48">
      <div className="mb-6 max-w-xl flex flex-col">
        <div className="bg-gray-200 w-4/5 h-4 rounded-lg animate-pulse mb-2"></div>
        <div className="bg-gray-200 w-3/4 h-4 rounded-lg animate-pulse mb-2"></div>
        <div className="bg-gray-200 w-2/3 h-3 rounded-lg animate-pulse mb-2"></div>
        <div className="bg-gray-200  w-2/5 xl h-3 rounded-lg animate-pulse mb-2"></div>
      </div>
      <div className="mb-6 max-w-xl flex flex-col">
        <div className="bg-gray-200 w-4/5 h-4 rounded-lg animate-pulse mb-2"></div>
        <div className="bg-gray-200 w-3/4 h-4 rounded-lg animate-pulse mb-2"></div>
        <div className="bg-gray-200 w-2/3 h-3 rounded-lg animate-pulse mb-2"></div>
        <div className="bg-gray-200  w-2/5 xl h-3 rounded-lg animate-pulse mb-2"></div>
      </div>
      <div className="mb-6 max-w-xl flex flex-col">
        <div className="bg-gray-200 w-4/5 h-4 rounded-lg animate-pulse mb-2"></div>
        <div className="bg-gray-200 w-3/4 h-4 rounded-lg animate-pulse mb-2"></div>
        <div className="bg-gray-200 w-2/3 h-3 rounded-lg animate-pulse mb-2"></div>
        <div className="bg-gray-200 w-2/5 xl h-3 rounded-lg animate-pulse mb-2"></div>
      </div>
    </div>
  );
};

export default loading;
