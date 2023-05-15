"use client";

import React, { useEffect, useState } from "react";

const CountryApi = () => {
  const [country, setCountry] = useState("United States");
  const [countryCode, setCountryCode] = useState("USA");
  const [region, setRegion] = useState("New York");

  useEffect(() => {
    // IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
    (async () => {
      const api = await fetch("https://ipapi.co/json/");
      if (!api.ok) return;

      const data = await api.json();

      setCountry(data.country_name);
      setCountryCode(data.country_code);
      setRegion(data.region);
    })();
  }, []);

  return (
    <>
      <p className="pb-3 border-b border-gray-300 text-cyan-600 text-base text-center sm:text-start">
        {region}, {country} - {countryCode}
      </p>
    </>
  );
};

export default CountryApi;
