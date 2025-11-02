import React from "react";
import { experiences } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="pb-16">
      <h2 className="text-4xl text-center my-20">Experiences</h2>
      <div className="mx-2 p-4">
        {experiences.map((experience, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-2 font-semibold">
                  {experience.title} -{" "}
                  <span className="text-sm text-stone-500">
                    {experience.organization}
                  </span>
                </h3>
                <div className="mb-4 text-stone-400">
                  {experience.responsibilities.map((res, index) => (
                    <li key={index}>{res}</li>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
