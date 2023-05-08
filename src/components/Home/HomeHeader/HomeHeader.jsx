import SignButton from "@/components/UI/Button/SignButton";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
  return (
    <header className="flex justify-end py-6 px-8">
      <div className="flex items-center space-x-4">
        <Link
          className="hover:underline hover:text-cyan-700 transition-colors"
          href="https://gmail.com"
        >
          Gmail
        </Link>
        <Link
          className="hover:underline hover:text-cyan-700 transition-colors"
          href="https://images.google.com"
        >
          Images
        </Link>
        <TbGridDots className="header-icon" />
        <SignButton text="Sign in" />
      </div>
    </header>
  );
};

export default HomeHeader;
