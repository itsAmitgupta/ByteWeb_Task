import React, { useState } from "react";
import axios from "axios";
// import { Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    console.log(data);
    await axios
      .post("http://localhost:3001/api/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          navigate("/dashboard");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <div className="w-full h-auto p-5">
      <div className="flex gap-6 w-full">
        <div className="w-[780px] h-auto relative">
          <img
            src="/assetes/Signup.jpg"
            alt="signup"
            className="h-[600px] w-full"
          />
          <div className="absolute left-32 top-80 w-[580px] h-[260px] bg-white bg-opacity-20 text-white p-5 border border-white border-opacity-20 rounded-md font-serif">
            <p className="text-md">
              "Managing my digital business cards has never been easier since I
              started using Tapect. The intuitive interface and efficient tools
              streamline the process, allowing me to focus on what truly
              matters: connecting with clients and growing my network. Tapect
              has truly revolutionized the way I manage my professional
              contacts."
            </p>
            <div className="mt-6">
            <div className="gap-2">
                <p>Sarah Smith</p>
                <p>Marketing Consultant</p>
                <div className="flex justify-between">
                <p className="flex"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                <p className="flex gap-2"><IoIosArrowDropleft size={24}/><IoIosArrowDropright size={24}/></p>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] ml-2">
          <div className="container mx-auto max-w-md">
            <img
              src="/assetes/tapect.png"
              className="w-[150px] h-[50px]"
              alt=""
            />
            <h2 className="text-sm mb-6">
              Create your tapect account by following 3 simple steps.
            </h2>

            <div className="flex justify-center space-x-4 mb-1">
              <div className="bg-purple-400 bg-opacity-20 rounded-md">
                <span className="drop-shadow-lg">1</span>
                <p className="">Personal Details</p>
              </div>
              <div className="step-indicator bg-purple-400 bg-opacity-10">
                <span className="step-number">2</span>
                <p className="step-title">Professional Info</p>
              </div>
              <div className="step-indicator bg-purple-400 bg-opacity-10">
                <span className="step-number">3</span>
                <p className="step-title">Account Security</p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium"
                >
                  First Name<span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={data.firstName}
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={data.lastName}
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email<span className='text-red-600'>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Password<span className='text-red-600'>*</span>
                </label>
                <input
                  type="password"
                  id="email"
                  name="email"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded"
              >
                Continue
              </button>{" "}
               
              <p className="text-center ">
                Already have an account?
                <Link to="/signin" className="text-purple-600">
                  Sign In
                </Link>
              </p>
              <div class="flex items-center justify-center w-full max-w-md">
                <div class="w-full border-t-2 border-gray-300"></div>
                <span class="px-3 text-gray-500">Or</span>
                <div class="w-full border-t-2 border-gray-300"></div>
              </div>
              <button className="w-full text-gray-800 font-bold py-2 px-4 rounded border border-black">
                <img src="/assetes/google.png" className="w-[25px] h-25px inline" alt="" /> Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
