"use client";

import React, { useEffect, useState } from "react";

const CountryApi = () => {
  const [country, setCountry] = useState("United States");
  const [countryCode, setCountryCode] = useState("USA");

  useEffect(() => {
    // IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
    (async () => {
      const api = await fetch("http://ip-api.com/json/");
      if (!api.ok) return;

      const data = await api.json();

      setCountry(data.country);
      setCountryCode(data.countryCode);
    })();
  }, []);

  return (
    <>
      <p className="pb-3 border-b border-gray-300 text-cyan-600 text-base text-center sm:text-start">
        {country} - {countryCode}
      </p>
    </>
  );
};

export default CountryApi;
