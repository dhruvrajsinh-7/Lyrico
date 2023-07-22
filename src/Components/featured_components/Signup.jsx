import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { HTTPunsecurePOSTRequest } from "../../services/API";
const SignupModal = ({ handleSignupModalClose, handleModalLoginOpen }) => {
  const [emailid, setEmailid] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        firstname: firstName,
        lastname: lastName,
        password,
        emailid: emailid,
        username,
      };
      const response = await HTTPunsecurePOSTRequest("/auth/register", data);
      if (response.message) throw new Error(response.message);
      console.log(response);
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      handleSignupModalClose();
      toast.success("Sign up successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const modalcheck = () => {
    handleSignupModalClose();
    handleModalLoginOpen();
  };
  return (
    <div className="fixed  flex items-center justify-center  z-50 opacity-80 bg-[#1F1F22]">
      <div className="h-[600px] w-[1000px]  bg-gradient-to-br   text-white p-4 rounded-lg shadow-lg relative">
        <button
          onClick={handleSignupModalClose}
          className=" text-white text-2xl absolute top-2 right-2 cursor-pointer"
        >
          &times;
        </button>
        <h4 className="font-bold text-3xl text-white mb-3 text-center">
          Sign Up to Lyrico
        </h4>
        <form className="items-center justify-center flex flex-col text-xl">
          <h1 className="text-[#C56EFB] font-semibold">Firstname</h1>
          <input
            type="text"
            name="firstname"
            className=" bg-transparent  border-b-2 border-[#C56EFB]  rounded-full px-4  py-2 mb-3"
            placeholder="Enter Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <h1 className="text-[#C56EFB] font-semibold">Lastname</h1>
          <input
            type="text"
            name="lastname"
            className=" bg-transparent  border-b-2 border-[#C56EFB]   rounded-full px-4 py-2 mb-3"
            placeholder="Enter Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <h1 className="text-[#C56EFB] font-semibold">username</h1>
          <input
            type="text"
            name="username"
            className=" bg-transparent  border-b-2 border-[#C56EFB]  rounded-full px-4  py-2 mb-3"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h1 className="text-[#C56EFB] font-semibold">Email-id</h1>
          <input
            type="email"
            name="emailid"
            className=" bg-transparent  border-b-2 border-[#C56EFB]  rounded-full px-4  py-2 mb-3"
            placeholder="Enter Email-id"
            value={emailid}
            onChange={(e) => setEmailid(e.target.value)}
          />
          <h1 className="text-[#C56EFB] font-semibold">Password</h1>
          <input
            type="password"
            name="password"
            className=" bg-transparent  border-b-2 border-[#C56EFB]   rounded-full px-4 py-2 mb-3"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className=" bg-white px-8 text-black font-bold py-3  rounded-full transition-all duration-300 transform hover:scale-110   mx-auto"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Sign up free
          </button>
        </form>
        <p className="text-center text-white text-xl mt-2">
          Already have an account?{" "}
          <span className="text-[#e3cdf1] cursor-pointer" onClick={modalcheck}>
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
