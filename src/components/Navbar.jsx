import React from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between fixed right-0 top-0 w-full">
      <div></div>
      <ul className="flex flex-row justify-center">
        {navLinks.map((navLink) => (
          <li className="list-none m-4" key={navLink.name}>
            <a href={navLink.link}>{navLink.name}</a>
          </li>
        ))}
      </ul>
      <div></div>
    </nav>
  );
};

export default Navbar;
