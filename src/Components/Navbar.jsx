import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div
        className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono z-2"
        role="navigation"
      >
        <div className="ml-auto">
          <a href="#" className="p-4">
            Upgrgade
          </a>
          <a href="#" className="p-4 border-r border-black">
            Download
          </a>
          <a href="#" className="p-4">
            Signup
          </a>
          <a href="#" className="p-1 border-black rounded-full border-2">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
