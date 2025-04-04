import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { close } from "../assets";
import { easeInOut, motion } from "framer-motion";
// import { baseUrl } from '../Urls'
import useScrollToTop from "./useScrollToTop";

const Login = (props) => {
  useScrollToTop();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  // let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch(`${baseUrl}/api/auth/login`, {
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      Swal.fire({
        title: "Success!",
        text: "You are logging in",
        icon: "success",
        confirmButtonText: "Cool",
      });
      navigate("/portal");
      // history.push("/");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please enter correct credentials",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section */}
        <motion.div
          animate={{
            x: [-200, 0],
          }}
          transition={{
            duration: 2,
            ease: easeInOut,
          }}
          className="flex-1 bg-cover bg-center relative rounded-e-3xl"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/68767/divers-underwater-ocean-swim-68767.jpeg?auto=compress&cs=tinysrgb&w=1280')",
          }}
        ></motion.div>
        
        <motion.div
          animate={{
            x: [600, 0],
          }}
          transition={{
            duration: 2,
            ease: easeInOut,
          }}
          className="flex-1 bg-white flex flex-col justify-center items-center p-8"
        >
          <h2 className="font-serif text-3xl font-bold mb-4">
            Welcome to Ocean's Enigma
          </h2>
          <p className="text-gray-500 mb-6">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-900 tracking-tighter font-semibold hover:underline"
            >
              Sign up for free
            </a>
          </p>

          {/* <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-1">
            <form
              onSubmit={handleSubmit}
              id="login"
              action="/login"
              method="post"
            >
              <div className="mb-3 lg:m-2">
                <label htmlFor="email" className="text-lg text-black">
                  EMAIL*
                </label>{" "}
                <br />
                <input
                  type="email"
                  className="mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 pl-2 text-slate-800"
                  id="email"
                  name="email"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-3 lg:m-2">
                <label htmlFor="password" className="text-lg text-black">
                  Password*
                </label>{" "}
                <br />
                <input
                  type="password"
                  className="mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 pl-2 text-slate-800"
                  id="password"
                  name="password"
                  onChange={onChange}
                  required
                />
              </div>
              <br />
              <div>
                <button
                  type="submit"
                  className="ml-20 bg-[#202020] lg:ml-32 px-12 lg:px-16 py-3 border-2 border-[#b4b3b5] shadow-sm hover:shadow-xl shadow-[#f5f2f2]"
                  onClick={handleSubmit}
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div> */}

          <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username or Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              name="email"
              onChange={onChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              name="password"
              onChange={onChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-3xl hover:bg-gray-800"
            >
              Log In
            </button>
          </form>

          {/* <div className="absolute">
                    <img className='w-96 h-[450px]' src="https://images.pexels.com/photos/1437493/pexels-photo-1437493.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                </div> */}
        </motion.div>
        <div className="hidden lg:block bg-gradient-to-b from-black to-white p-4 float-right">
          <img src={close} alt="close" className="w-5 h-5 cursor-pointer" onClick={() => {navigate("/")}} />
        </div>
      </div>
    </>
  );
};

export default Login;
