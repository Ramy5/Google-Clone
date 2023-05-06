import Link from "next/link";
import React from "react";
import CountryApi from "./CountryApi";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 bg-gray-100 text-gray-500 py-4 px-6 w-full text-sm">
      <CountryApi />

      <div className="pt-3 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        <ul className="flex items-center space-x-6 flex-wrap">
          <li className="footer-link">About</li>
          <li className="footer-link">Advertising</li>
          <li className="footer-link">Business</li>
          <li className="footer-link">How Search Works</li>
        </ul>

        <ul className="flex items-center space-x-6 flex-wrap">
          <li className="footer-link">Privacy</li>
          <li className="footer-link">Terms</li>
          <li className="footer-link">Setting</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
