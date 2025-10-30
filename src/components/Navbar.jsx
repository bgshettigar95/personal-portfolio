import { navLinks, socialLinks } from "../constants";
import logo from "../assets/logo.png";
import * as FaIcons from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed right-0 top-0 w-full">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home" className="ml-2">
          <img src={logo} className="mx-2" alt="logo" width={20} height={20} />
        </a>
      </div>

      <ul className="flex flex-row justify-center">
        {navLinks.map((navLink) => (
          <li className="list-none m-4" key={navLink.name}>
            <a href={navLink.link}>{navLink.name}</a>
          </li>
        ))}
      </ul>

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
    </nav>
  );
};

export default Navbar;
