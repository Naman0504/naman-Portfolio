import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import sass from "../assets/sass.png";
import php from "../assets/php.png";
import mysql from "../assets/MySQL.png";
import firebase from "../assets/Firebase.png";
import github from "../assets/github.png";
import { motion } from "framer-motion";

const Skills = () => {
  const animations = {
    image: {
      whileHover: {
        scale: 1.1,
      },
      transition: {
        duration: 1.5,
      },
      initial: {
        opacity: 0,
        scale: 0,
      },
      whileInView: {
        scale: 1,
        opacity: 1,
      },
    },
  };
  const icons = [
    {
      id: 1,
      title: "HTML",
      img: html,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      title: "CSS",
      img: css,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      title: "Javascript",
      img: javascript,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      title: "React",
      img: react,
      style: "shadow-blue-600",
    },
    {
      id: 6,
      title: "Php",
      img: php,
      style: "shadow-purple-500",
    },
    {
      id: 7,
      title: "MySql",
      img: mysql,
      style: "shadow-yellow-700",
    },
    {
      id: 8,
      title: "Tailwind",
      img: tailwind,
      style: "shadow-blue-500",
    },
    {
      id: 9,
      title: "Sass",
      img: sass,
      style: "shadow-pink-500",
    },
    {
      id: 10,
      title: "Firebase",
      img: firebase,
      style: "shadow-yellow-500",
    },
    {
      id: 11,
      title: "Github",
      img: github,
      style: "shadow-white",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 w-fit mx-auto">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {icons.map(({ id, title, img, style }) => (
            <motion.div
              {...animations.image}
              key={id}
              className={`shadow-md hover:scale-105   duration-500 py-2 rounded-md ${style}`}
            >
              <img src={img} className=" size-20  mx-auto " />
              <p className="mt-1">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
