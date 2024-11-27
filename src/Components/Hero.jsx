import React from "react";
import { HERO_CONTENT } from "../constants";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 h-[100vh] items-center justify-center flex">
      <div className="flex flex-wrap ">
        <div className="w-full   ">
          <div className="flex flex-col items-center ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-6xl font-bold  text-center lg:mt-16"
            >
              Sujeevanan Loganathan <br />
              <span className="text-4xl font-semibold">
                Your Friendly Software Wizard
              </span>
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking tight text-transparent mb-2"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="w-full text-center lg:w-1/2"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
              <div className=" hover:cursor-pointer">
                <a href="https://www.linkedin.com/in/sujeevanan-loganathan-101037222/">
                  <FaLinkedin />
                </a>
              </div>
              <div className=" hover:cursor-pointer">
                <a href="https://github.com/sujeevanan?tab=overview&from=2024-02-01&to=2024-02-29">
                  <FaGithub />
                </a>
              </div>
            </div>
            <button className="border-neutral-300 border-2 p-2 rounded-lg">
              Download CV
            </button>
          </div>
        </div>
        {/* <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilepic}
              alt="kevin"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
