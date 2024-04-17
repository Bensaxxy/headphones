import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import logo from "../assets/logo.png";

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Mobile from "./Mobile";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component is mounted
      transition={{ duration: 1 }} // Animation duration
      className="bg-gradient-to-r from-[#AAC9D4] via-[#E5FAFF] to-[#AAC9D4] fixed h-[80px] lg:h-[90px] w-full px-[30px] lg:px-[70px] z-30 flex items-center gap-x-8"
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"}>
          <img className="max-w-[100px]" src={logo} />
        </Link>

        <div className="flex items-center">
          <nav className="gap-x-12 hidden lg:flex">
            <Link className="lg:text-xl" to={"/"}>
              Home
            </Link>
            <Link className="lg:text-xl" to={"/about"}>
              About Us
            </Link>
            <Link className="lg:text-xl" to={"/testimonials"}>
              Testimonials
            </Link>
            <Link className="lg:text-xl" to={"/contacts"}>
              Contacts
            </Link>
          </nav>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }} // Initial animation state
        animate={{ opacity: 1 }} // Animation when component is mounted
        transition={{ delay: 1, duration: 1 }} // Delay animation to wait for header animation to complete
        className="flex gap-x-4"
      >
        <FaInstagram size={23} />
        <FaFacebook size={23} />
        <FaXTwitter size={23} />
      </motion.div>
      {/* Mobile view */}
      <Mobile />
    </motion.header>
  );
};

export default Header;
