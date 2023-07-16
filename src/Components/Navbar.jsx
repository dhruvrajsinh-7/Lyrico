import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div
        className="flex justify-between items-center h-16 py-5 px-5 text-[#FFFFFF] relative shadow-sm font-mono z-2"
        role="navigation"
      >
        <div className="ml-auto">
          <a href="#" className="p-4">
            Upgrgade
          </a>
          <a href="#" className="p-4 border-r border-[#FFFFFF]">
            Download
          </a>
          <a href="#" className="p-4">
            Signup
          </a>
          <a
            href="#"
            className="p-1 rounded-full border-2"
            style={{
              borderImage: "linear-gradient(to left, #743ad5, #d53a9d)",
              borderImageSlice: 1,
            }}
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
