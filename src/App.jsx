import React from "react";
import Navbar from "./sections/Navbar";
import Introduction from "./sections/Introduction";
import ShowcaseSection from "./sections/ShowcaseSection";
import Experience from "./sections/Experience";
import ContactMe from "./sections/ContactMe";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="w-full h-full relative ">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
      </div>
      <div className="">
        <Navbar />
        <Introduction />
        <Skills />
        <ShowcaseSection />
        <Experience />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
};

export default App;
