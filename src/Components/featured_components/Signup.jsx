import React from "react";

const SignupModal = ({ handleSignupModalClose }) => {
  return (
    <div className="fixed  flex items-center justify-center z-50">
      <div className="h-[570px] w-[1000px]  bg-gradient-to-br bg-[#1F1F22] opacity-80 text-white p-8 rounded-lg shadow-lg relative">
        <button
          onClick={handleSignupModalClose}
          className=" text-white text-2xl absolute top-2 right-2 cursor-pointer"
        >
          &times;
        </button>
        <h4 className="font-bold text-4xl text-white my-3 text-center">
          Sign Up to Lyrico
        </h4>
        <form className="items-center justify-center flex flex-col text-xl">
          <h1 className="text-[#C56EFB] font-semibold">Firstname</h1>
          <input
            type="text"
            name="firstname"
            className=" bg-transparent  border-b-2 border-[#C56EFB]  rounded-full px-4  py-2 mb-4"
            placeholder="Enter Firstname"
          />
          <h1 className="text-[#C56EFB] font-semibold">Lastname</h1>
          <input
            type="text"
            name="lastname"
            className=" bg-transparent  border-b-2 border-[#C56EFB]   rounded-full px-4 py-2 mb-4"
            placeholder="Enter Lastname"
          />
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
            className=" bg-white px-10 text-black font-bold py-3  rounded-full transition-all duration-300 transform hover:scale-110 mt-4  mx-auto"
            type="submit"
            value="Sign Up Free"
          />
        </form>
        <p className="text-center text-white text-xl mt-4">
          Already have an account?{" "}
          <span className="text-[#C56EFB] cursor-pointer">Log in</span>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
