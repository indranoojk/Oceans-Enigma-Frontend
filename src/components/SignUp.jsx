import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { baseUrl } from '../Urls'
import useScrollToTop from "./useScrollToTop";
import { close } from "../assets";
import { easeInOut, motion } from "framer-motion";
// import { useHistory } from 'react-router-dom'
// let history = useHistory();

const SignUp = (props) => {
  useScrollToTop();

  const [submit, setSumbit] = useState(false);

  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    // const response = await fetch(`${baseUrl}/api/auth/createuser`, {
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/login");
      // history.push("/");
      // props.showAlert("Account Created Successfully", "success")
    } else {
      alert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <div className="bg-gradient-to-b from-black to-white p-4 float-right">
        <img
          src={close}
          alt="close"
          className="w-5 h-5 cursor-pointer "
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <motion.div
        animate={{
          x: [-600, 0],
        }}
        transition={{
          duration: 2,
          ease: easeInOut,
        }}
        className="flex-1 bg-white flex flex-col justify-center items-center p-8"
      >
        <h2 className="font-serif text-3xl font-bold mb-4">
          Create an account
        </h2>
        <p className="text-gray-500 mb-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-900 tracking-tighter font-semibold hover:underline"
          >
            Log in
          </a>
        </p>

        <form onSubmit={handleSubmit()} className="w-full max-w-sm space-y-4">
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="name"
            name="name"
            onChange={onChange}
            required
          />
          <input
            type="text"
            placeholder="Enter Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            name="email"
            onChange={onChange}
            required
          />
          <input
            type="password"
            placeholder="Password (atleast 8 characters)"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={onChange}
            name="password"
            id="password"
            minLength={8}
            required
          />
          {/* <div className="mb-3">
                    <label htmlFor="cpassword" className="text-lg text-black">Confirm Password</label>
                    <input type="password" className="'mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 pl-2 text-slate-800'" onChange={onChange} name="cpassword" id="cpassword" minLength={5} required/>
                </div> */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-3xl hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </motion.div>

      <motion.div
        animate={{
          x: [200, 0],
        }}
        transition={{
          duration: 2,
          ease: easeInOut,
        }}
        className="flex-1 bg-cover bg-center relative rounded-s-3xl"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=1280')",
        }}
      ></motion.div>
    </div>
  );
};

export default SignUp;
