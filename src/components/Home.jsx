import React from "react";
import me from "../assets/Nimg.png";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

const Home = () => {
  const animations = {
    h2: {
      transition: {
        duration: 1,
      },
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    icon: {
      transition: {
        duration: 2,
      },
      initial: {
        y: "100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },

    button: {
      whileHover: {
        scale: 1.1,
      },
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
    image: {
      transition: {
        duration: 1.5,
      },
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 1,
      },
    },
  };
  return (
    <div
      name="home"
      className="flex justify-between items-center h-screen text-white w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className=" w-full mx-auto flex flex-col-reverse  items-center justify-center h-full px-4 md:flex-row md:w-5/6  md:gap-8">
        <div className="w-full  flex flex-col gap-4 justify-start items-center text-center   h-1/2 py-3  md:h-80   md:items-start md:text-left md:px-4 md:gap-5">
          <motion.h2
            {...animations.h2}
            className="text-2xl mt-2 sm:text-4xl md:text-6xl font-semibold"
          >
            I'm <span className=" text-cyan-500 ">Naman Kumar Matiyara</span>
          </motion.h2>
          <motion.p
            {...animations.button}
            className=" text-xl font-semibold text-gray-500  md:text-3xl md:my-2 "
          >
            <Typewriter
              options={{
                strings: ["A Developer", "A Frontend Developer"],
                autoStart: true,
                cursor: "",
                loop: true,
                wrapperClassName: "typewriterpara",
              }}
            />
          </motion.p>
          <div className="social  ">
            <motion.div
              {...animations.icon}
              className="flex justify-center items-center space-x-4"
            >
              <a
                href="https://www.linkedin.com/in/naman-kumar-matiyara"
                target={"blank"}
              >
                <FaLinkedin
                  size={28}
                  className=" hover:scale-110 duration-300 hover:text-gray-300 "
                />
              </a>
              <a href="https://github.com/Naman0504" target={"blank"}>
                <FaGithub
                  size={28}
                  className=" hover:scale-110 duration-300 hover:text-gray-300 "
                />
              </a>
              <FaInstagram
                size={28}
                className=" hover:scale-110 duration-300 hover:text-gray-300 "
              />
            </motion.div>
          </div>
          <div className="flex justify-start items-center gap-4">
            <a href="mailto:namanmatiyara@gmail.com">
              <motion.button
                {...animations.button}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
              >
                Hire me
              </motion.button>
            </a>
            <Link to={"work"} smooth duration={500}>
              <motion.button
                {...animations.button}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
              >
                Project
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
        <div className=" w-48 h-48 flex justify-center items-center rounded-full   md:w-[350px]  md:h-80 md:rounded-md ">
          <motion.img
            {...animations.image}
            src={me}
            alt="my profile"
            className=" h-full w-full   rounded-full md:h-full md:w-full md:rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
