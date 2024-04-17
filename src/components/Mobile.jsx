import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const Mobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div>
        <IoMenu
          className="cursor-pointer"
          size={25}
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="show"
          className="bg-white shadow-2xl absolute top-0 right-0 w-full h-screen max-w-xs z-20"
        >
          <div>
            <IoClose
              className="absolute top-6 left-3 cursor-pointer"
              size={30}
              onClick={() => setOpen(false)}
            />
          </div>
          <ul className="h-full flex flex-col justify-center items-center text-center gap-y-8 font-bold text-2xl">
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to={"/"}>Home</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to={"/about"}>About Us</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to={"/testimonials"}>Testimonials</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to={"/contacts"}>Contacts</Link>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Mobile;
