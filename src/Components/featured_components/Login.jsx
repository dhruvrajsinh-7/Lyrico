import React from "react";

const LoginModal = ({ handleLoginModalClose }) => {
  return (
    <div className="fixed  flex items-center justify-center z-50">
      <div className="h-[500px] w-[1000px]  bg-gradient-to-br bg-[#1F1F22] opacity-80 text-white p-8 rounded-lg shadow-lg relative">
        <button
          onClick={handleLoginModalClose}
          className="close text-white text-2xl absolute top-2 right-2 cursor-pointer"
        >
          &times;
        </button>
        <h4 className="font-bold text-4xl text-white my-3 text-center">
          Log in to Lyrico
        </h4>
        <form className="items-center justify-center flex flex-col text-xl">
          <h1 className="text-[#C56EFB] font-semibold">Email-id</h1>
          <input
            type="email"
            name="email"
            className=" bg-transparent  border-b-2 border-[#C56EFB]  rounded-full px-4  py-2 mb-4"
            placeholder="Enter Email-id"
          />
          <h1 className="text-[#C56EFB] font-semibold">Password</h1>
          <input
            type="password"
            name="password"
            className=" bg-transparent  border-b-2 border-[#C56EFB]   rounded-full px-4 py-2 mb-4"
            placeholder="Enter Password"
          />
          <input
            className="btn login-trigger bg-white px-10 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-110 mt-4 block mx-auto"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
