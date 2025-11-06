import React from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";

export const ShowcaseSection = () => {
  return (
    <section id="work" className="pt-16">
      <motion.h2
        className="text-4xl text-center my-20"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div>
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="mb-8 p-4 flex flex-wrap lg:justify-center"
            >
              <motion.div
                className="w-full lg:w-1/4"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={project.image}
                  height={250}
                  width={250}
                  className="mb-6 rounded"
                  alt={project.title}
                />
              </motion.div>
              <motion.div
                className="w-full lg:w-3/4"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-stone-400">{project.desc}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech) => {
                    return (
                      <div
                        className="mb-2 mr-2 bg-stone-700 text-sm text-stone-300 p-2 rounded font-medium"
                        key={tech}
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShowcaseSection;
