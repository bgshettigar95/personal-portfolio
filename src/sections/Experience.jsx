import React from "react";
import { experiences } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="pt-16">
      <motion.h2
        className="text-4xl text-center my-20"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experiences
      </motion.h2>
      <div className="mx-2 p-4">
        {experiences.map((experience) => {
          return (
            <div
              key={experience.title}
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <motion.div
                className="w-full lg:w-1/4"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
              </motion.div>
              <motion.div
                className="w-full max-w-xl lg:w-3/4"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h3 className="mb-2 font-semibold">
                  {experience.title} -{" "}
                  <span className="text-sm text-stone-500">
                    {experience.organization}
                  </span>
                </h3>
                <div className="mb-4 text-stone-400">
                  {experience.responsibilities.map((res) => (
                    <li key={res}>{res}</li>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
