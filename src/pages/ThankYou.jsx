"use client";

import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function ThankYouPage() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f63947] text-white text-center relative">
      <img
        className="w-[250px] p-4 mb-8 absolute top-0 left-0"
        src={logo}
        alt="Logo"
      />
      <div>
        <h1 className="text-5xl font-bold mb-5 md:text-4xl">Thank You!</h1>
        <p className="text-2xl mb-5 md:text-lg">
          Your registration was successful. We will get in touch with you soon.
        </p>
        <button
          className="bg-[#152a68] text-white border-none rounded px-5 py-3 text-lg font-bold cursor-pointer mt-5 md:text-sm"
          onClick={handleBackToHome}
        >
          Back to Main Page
        </button>
      </div>
    </div>
  );
}
