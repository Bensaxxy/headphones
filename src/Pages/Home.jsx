import React from "react";
import { motion } from "framer-motion";
import homeImage from "../assets/home.png";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-[#AAC9D4] via-[#E5FAFF] to-[#AAC9D4] pt-28 h-screen w-full px-[80px] sm:px-[30px] md:px-[100px]"
    >
      <div className="flex justify-center items-center flex-col-reverse lg:flex-row">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl md:text-4xl md:text-center lg:text-7xl lg:text-left text-center text-[#184162] mb-10"
          >
            Experience Pure Sound: Meet Our Headphones
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-1xl text-center lg:text-left text-[#184162] font-semibold"
          >
            Built to Last, Enjoyed for a Lifetime, Transform Your Listening
            Experience Today
          </motion.p>
          <div className="flex justify-center lg:justify-start gap-x-4 my-7">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#184162] px-8 py-2 text-white rounded-full hover:outline hover:text-[#184162] duration-300 outline-[#184162] outline-2 hover:bg-transparent lg:text-xl"
            >
              Buy Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#184162] px-8 py-2 text-white rounded-full hover:outline hover:text-[#184162] duration-300 outline-[#184162] outline-2 hover:bg-transparent lg:text-xl"
            >
              Explore
            </motion.button>
          </div>
        </div>
        {/* Apply the cyclical animation to the home image */}
        <motion.img
          className=" max-w-full lg:w-[450px] md:w-[450px] w-[350px]"
          src={homeImage}
          animate={{
            y: [0, 20, 0], // Change the y position of the image in a cyclical motion
          }}
          transition={{
            duration: 3, // Duration of each animation cycle
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "reverse", // Reverse the animation direction at the end of each cycle
          }}
        />
      </div>
    </motion.div>
  );
};

export default Home;
