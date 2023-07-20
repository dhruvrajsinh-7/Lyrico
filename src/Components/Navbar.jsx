import React, { useState } from "react";
import LoginModal from "./featured_components/Login";
import SignupModal from "./featured_components/Signup";
const Navbar = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleModalLoginOpen = () => {
    setIsLoginModalOpen(true);
  };

  const handleModalSignupOpen = () => {
    setIsSignupModalOpen(true);
  };
  const handleSignupModalClose = () => {
    setIsSignupModalOpen(false);
  };
  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <nav>
      <div className="flex justify-between items-center h-16 py-5 px-5 text-white relative shadow-sm font-mono z-2">
        <div className="ml-auto">
          <a href="#" className="p-4">
            Upgrade
          </a>
          <a href="#" className="p-4 border-r border-white">
            Download
          </a>
          <button onClick={handleModalSignupOpen} className="p-4">
            Signup
          </button>
          <button
            onClick={handleModalLoginOpen}
            className="p-1 rounded-full border-2"
            style={{
              borderImage: "linear-gradient(to left, #743ad5, #d53a9d)",
              borderImageSlice: 1,
            }}
          >
            Login
          </button>
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal handleLoginModalClose={handleLoginModalClose} />
      )}
      {isSignupModalOpen && (
        <SignupModal handleSignupModalClose={handleSignupModalClose} />
      )}
    </nav>
  );
};

export default Navbar;
