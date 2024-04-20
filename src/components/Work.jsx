import React from "react";
import eshop from "../assets/eshop.png";
import portfolio from "../assets/portfolio.png";
import { motion } from "framer-motion";

const Work = () => {
  const animations = {
    image: {
      transition: {
        duration: 2,
      },
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 2,
      },
    },
  };
  const pro = [
    {
      id: 1,
      title: "eShop",
      img: eshop,
      demo: "https://eshop-lovat.vercel.app/",
      code: "https://github.com/Naman0504/Eshopp",
    },
    {
      id: 2,
      title: "portfolio",
      img: portfolio,
      demo: "",
      code: "",
    },
    {
      id: 3,
      title: "eShop",
      img: eshop,
      demo: "https://eshop-lovat.vercel.app/",
      code: "https://github.com/Naman0504/Eshopp",
    },
  ];
  return (
    <div
      name="work"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col jus w-full h-full pt-16">
        <div className=" pb-10 mt-10">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 w-fit mx-auto">
            Projects
          </p>
        </div>

        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-2 ">
          {pro.map(({ id, img, title, code, demo }) => (
            <motion.div
              {...animations.image}
              key={id}
              className="shadow-md shadow-gray-500 rounded-md hover:scale-105 duration-300"
            >
              <img
                src={img}
                alt="Projects"
                className="rounded-md  duration-500 hover:scale-105 "
              />
              <div className="text-center mt-2">
                <p className=" font-bold ">{title}</p>
              </div>
              <div className="flex items-center">
                <a
                  href={demo}
                  target="blank"
                  className="w-full flex justify-center"
                >
                  <button className="w-full px-4 py-2 m-4 duration-300 rounded-lg bg-gradient-to-r  from-cyan-500 to-blue-500 cursor-pointer hover:scale-105">
                    Demo
                  </button>
                </a>
                <a
                  href={code}
                  target="blank"
                  className="w-full flex justify-center"
                >
                  <button className="w-full px-5 py-2 m-4 duration-300 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
