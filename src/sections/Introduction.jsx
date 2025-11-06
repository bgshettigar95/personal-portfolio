import React from "react";
import profilePic from "../assets/profilephoto1.png";
import { introduction } from "../constants";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

const downloadIconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [5, 0],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Introduction = () => {
  return (
    <section id="introduction" className="w-full pb-4 pt-14 lg:mb-16">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex items-center justify-center">
            <motion.img
              src={profilePic}
              className="brightness-90 contrast-110 md:h-140"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex flex-col justify-center items-center lg:items-start mt-10 p-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="pb-2 text-4xl text-center tracking-tighter lg:text-8xl md:text-start"
              variants={childVariants}
            >
              {introduction.name}
            </motion.h2>
            <motion.span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent">
              {introduction.role.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.04, duration: 0 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
            <motion.p
              className="my-4 max-w-lg text-xl leading-relaxed tracking-tighter"
              variants={childVariants}
            >
              {introduction.desc}
            </motion.p>
            <motion.a
              href="/files/resume.pdf"
              download="resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className=" flex items-center group bg-white rounded-xl px-4 py-3 text-sm text-stone-700 mb-10 hover:bg-stone-700 hover:text-white font-semibold"
              variants={childVariants}
            >
              <span className="mr-2">Download Resume</span>
              <motion.span
                initial="initial"
                animate="animate"
                variants={downloadIconVariants(1)}
                className="rounded-full p-2 bg-stone-700 text-white group-hover:bg-white group-hover:text-stone-700"
              >
                <FaArrowDown />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
