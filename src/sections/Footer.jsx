import React from "react";
import { introduction } from "../constants";

const Footer = () => {
  return (
    <footer className="text-stone-400 text-xs text-center m-4">
      © {new Date().getFullYear()} Created by {introduction.name}. All rights
      reserved.
    </footer>
  );
};

export default Footer;
