import React from "react";
import ig from "../assets/vg.png";
import { useState } from "react";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";

const Contact = () => {
  const animations = {
    div: {
      // transition: {
      //   duration: 1,
      // },
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    btn: {
      transition: {
        duration: 3,
      },
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 1,
      },
    },
  };
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const submithandler = async (e) => {
    e.preventDefault();

    // console.log(name, email, message);
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      setmessage("");
      setname("");
      setemail("");
      toast.success("Message Sent", {
        style: { backgroundColor: "gray", color: "white" },
      });
    } catch (error) {
      toast.error("Error");
    }
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full">
        <div className="pb-5">
          <p className="w-fit mx-auto text-4xl font-bold text-center border-b-4 border-gray-400">
            Contact
          </p>
        </div>

        <div className="w-full flex  md:justify-around ">
          <div className="flex justify-center items-center p-2 mx-auto w-full   md:w-4/5">
            <form
              onSubmit={submithandler}
              className="flex flex-col w-full md:w-4/5 m-3  md:mt-5 "
            >
              <motion.input
                {...animations.div}
                transition={{ duration: 1.2 }}
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />

              <motion.input
                {...animations.div}
                transition={{ duration: 1.5 }}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter Your email"
                required
                className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <motion.textarea
                {...animations.div}
                transition={{ duration: 1.7 }}
                name="message"
                rows="8"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                placeholder="Enter your message"
                required
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></motion.textarea>

              <motion.button
                {...animations.btn}
                className="text-2 bg-gradient-to-b from-cyan-500 to-blue-500 px-5 py-3 mx-auto my-8 flex items-center rounded-md hover:scale-105 duration-300"
              >
                Submit
              </motion.button>
            </form>
          </div>
          <div className="hidden pt-8 md:w-2/5  md:block">
            <img
              src={ig}
              alt="Contact"
              className=" h-80 shadow-sm shadow-slate-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
