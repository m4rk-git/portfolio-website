import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github, linkedin } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState("bg-opacity-60");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setNavbarOpacity("bg-opacity-100");
      } else {
        setNavbarOpacity("bg-opacity-60");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary ${navbarOpacity}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex">
          <Link
            to="/"
            className="flex items-center gap-2 px-3"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Mark &nbsp;
              <span className="sm:block hidden">Domgörgen</span>
            </p>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 px-3"
            onClick={() => {
              setActive("");
              window.open("https://github.com/m4rk-git", "_blank");
            }}
          >
            <img src={github} alt="GitHub" className="w-8 h-8 object-contain" />
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 px-3"
            onClick={() => {
              setActive("");
              window.open(
                "https://www.linkedin.com/in/mark-domgoergen/",
                "_blank"
              );
            }}
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-7 h-7 object-contain"
            />
          </Link>
        </div>

        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
