import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="w-full py-8">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">
            Home
          </Link>
          <div className="flex justify-center items-center relative w-10 h-10 bg-gray-100 rounded-full">
            <IoCartOutline className="w-6" />
            <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
