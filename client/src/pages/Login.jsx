import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../assets/login.png";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <div className="bg-white rounded-3xl w-2/3 h-full flex justify-between shadow-sm	border-2 border-[#5429FF]-200">
        <div className="w-1/2 flex flex-col justify-between">
          <div className="pl-4 pt-4">
            <img src={logo} alt="logo" className="w-8 " />
          </div>

          <div className="flex justify-center">
            <div className="w-3/4">
              <div className="text-[#344054] text-3xl font-bold">
                Artistica Access
              </div>
              <div className="text-[#667085] text-sm mb-8">
                Please fill your detail to access your account.
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-sm text-[#344054] font-semibold"
                >
                  Email
                </label>
                <div className="border rounded border-[#D0D5DD]">
                  <input
                    type="email"
                    className="w-full  h-10 pl-2 bg-transparent focus:outline-none text-sm text-[#667085]"
                    id="email"
                    placeholder="anas@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="text-sm text-[#344054] font-semibold"
                >
                  Password
                </label>
                <div className="border rounded border-[#D0D5DD]">
                  <input
                    type="password"
                    className="w-full  h-10 pl-2 bg-transparent focus:outline-none text-sm text-[#667085]"
                    id="password"
                    placeholder="Length must be grater then 4"
                  />
                </div>
              </div>

              <div className="flex justify-between mb-4">
                <div className="text-xs text-[#344054] flex items-center gap-1">
                  <input type="checkbox" />
                  <label htmlFor="">Remember me</label>
                </div>
                <a href="#" className="text-xs text-[#5429FF]">
                  Forgot Password?
                </a>
              </div>

              <div className="bg-[#5429FF] h-10 cursor-pointer mb-4 rounded flex justify-center items-center text-white">
                Sign in
              </div>
              <div className="text-xs flex justify-center gap-1 text-[#344054]">
                Don’t have an account?{" "}
                <Link to="/register" >
                  <p className="text-[5429FF] underline">Register</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-[#818181] text-xs italic pl-4 pb-4">
            @CreatedbyAnasJMirza
          </div>
        </div>

        <div className="w-1/2">
          <img src={loginImage} alt="loginImage" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;
