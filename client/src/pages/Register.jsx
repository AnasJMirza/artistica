import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import logo from "../assets/logo.png";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[80vh] ">
        <div className="bg-white rounded-3xl w-2/3 h-full flex justify-between shadow-sm	border-2 border-[#5429FF]-200">
          <div className="w-1/2 flex flex-col justify-between">
            <div className="pl-4 pt-4">
              <img src={logo} alt="logo" className="w-8 " />
            </div>

            <div className="flex justify-center">
              <div className="w-3/4">
                <div className="text-[#344054] text-3xl font-bold">
                  Register Yourself
                </div>
                <div className="text-[#667085] text-sm mb-4">
                  Please fill your detail to register.
                </div>

                <div className="pb-2">
                  <label
                    htmlFor="userName"
                    className="text-sm text-[#344054] font-semibold"
                  >
                    Username
                  </label>
                  <div className="border rounded border-[#D0D5DD]">
                    <input
                      type="text"
                      className="w-full  h-10 pl-2 bg-transparent focus:outline-none text-sm text-[#667085]"
                      id="userName"
                      placeholder="eg: Anas J Mirza"
                    />
                  </div>
                </div>

                <div className="pb-2">
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

                <div className="pb-2">
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

                <div className="bg-[#5429FF] h-10 cursor-pointer my-3 rounded flex justify-center items-center text-white">
                  Register
                </div>
                <div className="text-xs flex justify-center gap-1 text-[#344054]">
                  Already have an account?
                  <Link to="/login">
                    <p className="text-[5429FF] underline">Login</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-[#818181] text-xs italic pl-4 pb-4">
              @CreatedbyAnasJMirza
            </div>
          </div>

          <div className="w-1/2 bg-[#CBCCE8] flex flex-col items-center justify-center pb-5 rounded-3xl">

            <label htmlFor="profile" className="flex justify-center">                    
                <img src={profile} alt="loginImage" className="w-1/2 border-4 rounded-full cursor-pointer"/>
            </label>
            <p className="text-[#344054] mt-5 text-lg font-bold">Profile Photo</p>
            <input type="file" name="" id="profile" className="hidden"/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
