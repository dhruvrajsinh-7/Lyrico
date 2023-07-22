import { toast } from "react-toastify";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { HTTPunsecurePOSTRequest } from "../../services/API";
const LoginModal = ({ handleLoginModalClose, handleModalSignupOpen }) => {
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        password,
        emailid: emailid,
      };
      const response = await HTTPunsecurePOSTRequest("/auth/login", data);
      if (response.message) throw new Error(response.message);
      console.log(response);
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      handleLoginModalClose();
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("invalid credentials");
    }
  };
  const modalcheck = () => {
    handleLoginModalClose();
    handleModalSignupOpen();
  };
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
            value={emailid}
            onChange={(e) => setEmailid(e.target.value)}
            className=" bg-transparent  border-b-2 border-[#C56EFB]  rounded-full px-4  py-2 mb-4"
            placeholder="Enter Email-id"
          />
          <h1 className="text-[#C56EFB] font-semibold">Password</h1>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-transparent  border-b-2 border-[#C56EFB]   rounded-full px-4 py-2 mb-4"
            placeholder="Enter Password"
          />
          <button
            className=" bg-white px-8 text-black font-bold py-3  rounded-full transition-all duration-300 transform hover:scale-110   mx-auto"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Log in
          </button>
        </form>
        <p className="text-center text-white text-xl mt-2">
          New User ?
          <span className="text-[#C56EFB] cursor-pointer" onClick={modalcheck}>
            register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
