import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

const Navbar = () => {
  const animations = {
    logo: {
      transition: {
        duration: 1,
      },
      initial: {
        y: "-50%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  const [nav, setnav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "work",
    },
    {
      id: 5,
      link: "certification",
    },
    {
      id: 6,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center px-4 w-full h-20 text-white sticky bg-black md:sticky">
      <motion.div
        {...animations.logo}
        className="text-3xl font-bold ml-2 md:ml-5"
      >
        <p>
          NAMAN
          <span className="text-cyan-500 relative -ml-1 ">
            <GoDotFill className="inline absolute bottom-0 left-0" size={16} />
          </span>
        </p>
      </motion.div>

      <ul className="hidden md:flex md:mr-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-cyan-500 duration-200 "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer pr-4 z-20 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col  justify-center items-center absolute top-0 left-0  w-full h-screen bg-gradient-to-b from-black to-gray-500 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize hover:text-cyan-500 duration-300 text-4xl py-6"
            >
              <Link
                onClick={() => setnav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
