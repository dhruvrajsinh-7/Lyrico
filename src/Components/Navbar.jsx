import React, { useState, useEffect } from "react";
import LoginModal from "./featured_components/Login";
import SignupModal from "./featured_components/Signup";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookie] = useCookies(["token"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookie.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [cookie.token]);
  const handleModalSignupOpen = () => {
    setIsSignupModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const handleSignupModalClose = () => {
    setIsSignupModalOpen(false);
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleModalLoginOpen = () => {
    setIsLoginModalOpen(true);
    setIsSignupModalOpen(false);
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
          {isLoggedIn ? (
            <Link
              to="/addsong"
              className="p-2 mx-2 bg-white text-black font-bold rounded-md"
            >
              add song
            </Link>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal
          handleLoginModalClose={handleLoginModalClose}
          handleModalSignupOpen={handleModalSignupOpen}
        />
      )}
      {isSignupModalOpen && (
        <SignupModal
          handleSignupModalClose={handleSignupModalClose}
          handleModalLoginOpen={handleModalLoginOpen}
        />
      )}
    </nav>
  );
};

export default Navbar;
