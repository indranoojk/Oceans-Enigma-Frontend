import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { fadeIn, textUp } from "../utils/motion";

const Footer = () => {

  let location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <>
      <div className="w-full min-h-[230px] bg-black text-white pt-20 px-20 lg:px-40">
        <motion.div
          variants={fadeIn("right", "spring", 0.25, 0.75)}
          initial='hidden'
          whileInView='show'
          // viewport={{ once: true, amount: 0.25 }}
        >
          <ul className="space-y-4 text-lg">
            <li></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/explore'>Explore</Link></li>
            <li><Link to='/predict'>Predict</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </motion.div>
        <div className="pt-10 pb-2">
          <motion.p>Ocean's Enigma @ 2025</motion.p>
        </div>
      </div>
    </>
  );
};

export default Footer;
