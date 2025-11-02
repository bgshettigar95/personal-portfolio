import React from "react";
import profilePic from "../assets/profilephoto1.png";
import { introduction } from "../constants";

const Introduction = () => {
  return (
    <section id="introduction" className="w-full pb-4 lg:mb-16">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex items-center justify-center">
            <img
              src={profilePic}
              className="brightness-90 contrast-110 md:h-140"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center items-center lg:items-start mt-10 p-2">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              {introduction.name}
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent">
              {introduction.role}
            </span>
            <p className="my-4 max-w-lg text-xl leading-relaxed tracking-tighter">
              {introduction.desc}
            </p>
            <a
              href="/files/resume.pdf"
              download="resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
