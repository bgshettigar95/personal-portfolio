import React from "react";
import { projects } from "../constants";

export const ShowcaseSection = () => {
  return (
    <section id="work" className="pb-16">
      <h2 className="text-4xl text-center my-20">Projects</h2>
      <div>
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="mb-8 p-4 flex flex-wrap lg:justify-center"
            >
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  height={250}
                  width={250}
                  className="mb-6 rounded"
                  alt={project.title}
                />
              </div>
              <div className="w-full lg:w-3/4">
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
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShowcaseSection;
