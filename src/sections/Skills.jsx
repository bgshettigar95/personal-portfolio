import React from "react";
import * as TbIcons from "react-icons/tb";
import { techStackIcons } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="pb-24">
      <h2 className="text-4xl text-center my-20">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techStackIcons.map((techStackIcon) => {
          const Icon = TbIcons[techStackIcon.icon];
          return (
            <div className="p-4">
              {" "}
              {Icon && (
                <Icon className={`text-7xl ${techStackIcon.cssClass}`} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
