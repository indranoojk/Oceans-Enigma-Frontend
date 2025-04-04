import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { menu, close } from "../assets";
import { navLinks } from "../constants";
// import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.1; // 10% of viewport height
      setScrolled(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-20  transition-all duration-300 ${
          scrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center text-white">
          <span
            style={{ fontFamily: "'Cinzel', serif" }}
            className="font-bold text-xl tracking-tight pt-0"
          >
            Ocean's
          </span>
          <span
            style={{ fontFamily: "'Cinzel', serif" }}
            className={`font-bold italic text-xl tracking-tight -ml-10 ${
              scrolled ? "pt-8" : "pt-11"
            } `}
          >
            {" "}
            Enigma
          </span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex lg:space-x-8 text-sm font-medium">
          <ul className="list-none hidden lg:flex lg:flex-row lg:gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-gray-300" : "text-white"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`/${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Started Button */}
        {/* <motion.div
          animate={{
            width: click ? '1000': 100,
            height: click ? '1000' : 100,
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
            // delay: 2,
            ease: easeOut,
          }}
        > */}
        <div className="hidden lg:block">
          <Link
            to="/login"
            className={`inline-block border-2 text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-white text-black border-black hover:bg-gray-100"
                : "bg-transparent text-white border-white hover:bg-white hover:text-black"
            }`}
          >
            Get Started
          </Link>
        </div>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-gray-400"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`/${link.id}`}>{link.title}</a>
                </li>
              ))}
              <Link
                to="/login"
                className={`inline-block border-2 text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "bg-white text-black border-black hover:bg-gray-100"
                    : "bg-white text-black border-black hover:bg-black hover:text-white"
                }`}
              >
                Get Started
              </Link>
            </ul>
          </div>
        </div>
        {/* </motion.div> */}
      </nav>
    </>
  );
};

export default Navbar;
