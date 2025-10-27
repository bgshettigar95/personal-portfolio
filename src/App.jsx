import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./sections/Introduction";
import ShowcaseSection from "./sections/ShowcaseSection";
import Experience from "./sections/Experience";
import ContactMe from "./sections/ContactMe";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <ShowcaseSection />
      <Skills />
      <Experience />
      <ContactMe />
    </>
  );
};

export default App;
