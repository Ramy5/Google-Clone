import React from "react";
import Image from "next/image";
import HomeHeader from "@/components/Home/HomeHeader/HomeHeader";
import BodyForm from "@/components/Home/HomeBody/BodyForm";

const Home = () => {
  return (
    <>
      {/* HEADER */}
      <HomeHeader />

      {/* BODY  */}
      <Image
        width={300}
        height={100}
        style={{ width: "300px", height: "100px" }}
        src={"/google-logo.png"}
        className="m-auto mt-20 mb-8"
        alt="Google Logo"
      />

      <BodyForm />
    </>
  );
};

export default Home;
