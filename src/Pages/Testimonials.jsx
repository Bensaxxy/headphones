import React from "react";
import construction from "../assets/construction.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className=" pt-28 h-screen w-full  bg-gradient-to-r from-[#AAC9D4] via-[#E5FAFF] to-[#AAC9D4] ">
      <div className=" flex justify-center items-center">
        <motion.img
          className=" w-[500px]"
          src={construction}
          initial={{ opacity: 0 }} // Set initial opacity to 0
          animate={{ opacity: 1 }} // Animate opacity to 1
          transition={{ duration: 2 }} // Set animation duration to 1 second
        />
      </div>
    </div>
  );
};

export default Testimonials;
