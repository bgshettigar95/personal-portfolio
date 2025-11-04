import { introduction, navLinks, socialLinks } from "../constants";
import logo from "../assets/logo.png";
import * as FaIcons from "react-icons/fa6";

const Navbar = () => {
  const nameText = introduction.name.split(" ");
  return (
    <header className="flex justify-between right-0 top-0 w-full fixed bg-black z-20 p-1">
      <div className="flex flex-shrink-0 items-center ">
        <a href="/" aria-label="Home" className="ml-2">
          {/* <img src={logo} className="mx-2" alt="logo" width={20} height={20} /> */}
          <div className="flex flex-col">
            {nameText.map((text, i) => {
              return (
                <span
                  key={i}
                  className={`text-sm font-bold bg-gradient-to-r from-purple-100 to-purple-800 bg-clip-text text-transparent`}
                >
                  {text}
                </span>
              );
            })}
          </div>
        </a>
      </div>

      <nav>
        <ul className="hidden md:flex flex-row justify-around mx-2">
          {navLinks.map((navLink) => (
            <li
              className="list-none m-3 text-sm text-stone-400 hover:font-bold"
              key={navLink.name}
            >
              <a href={navLink.link}>{navLink.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center mx-4">
        {socialLinks.map((socialLink) => {
          const Icon = FaIcons[socialLink.icon];
          return (
            <a
              href={socialLink.url}
              rel="noopener noreferrer"
              target="_blank"
              className="mx-1"
              aria-label={socialLink.name}
              key={socialLink.name}
            >
              {Icon && <Icon size={20} />}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
