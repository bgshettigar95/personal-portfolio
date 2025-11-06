import React from "react";
import * as TbIcons from "react-icons/tb";
import { techStackIcons } from "../constants";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <section id="skills" className="pt-16">
      <motion.h2
        className="text-4xl text-center mb-20"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technologies
      </motion.h2>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        {techStackIcons.map((techStackIcon, index) => {
          const Icon = TbIcons[techStackIcon.icon];
          return (
            <motion.div
              className="p-4"
              key={techStackIcon.name}
              initial="initial"
              animate="animate"
              variants={iconVariants(index % 2 === 0 ? 2.5 : 5)}
            >
              {Icon && (
                <Icon
                  className={`text-7xl ${techStackIcon.cssClass}`}
                  title={techStackIcon.name}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
