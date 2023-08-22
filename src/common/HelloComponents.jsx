import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

function HelloComponents({ handleClick }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  const [textChange, setTextChange] = useState("Hi!");
  useEffect(() => {
    const mouseMove = (position) => {
      // console.log(position);
      setMousePosition({
        x: position.clientX,
        y: position.clientY,

        // this print out the mouse corrodie
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
    },
    text: {
      height: 180,
      width: 180,
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      mixBlendMode: "HARD-LIGHT",
      // border: 2,
      // backgroundColor: "yellow",
      // setTextChange("This is Tailwind CSS"),
    },
  };

  const textEnter = () => {
    setCursorVariant("text");
    setTextChange("You look cute!");
  };

  const textLeave = () => {
    setCursorVariant("default");
    setTextChange("Hi");
  };
  // console.log(mousePosition);
  return (
    <div className="absolute flex flex-col items-center w-full justify-center">
      <div className="w-full sm:w-full md:w-3/4 xl:w-3/4">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-3xl font-mono text-gray-100 font-bold md:text-6xl xl:text-7xl"
        >
          <ReactTypingEffect
            eraseSpeed={25}
            eraseDelay={2000}
            speed={21}
            text={[
              "Hi there👋",
              "Have some lofi️🎶",
              "Thank you!💓",
              "You guys are amazing!👏",
            ]}
          />
        </h1>
      </div>
      {/* <ReactTypingEffect className="text-3xl md:text-6xl xl:text-6xl capitalize"   speed={20} text={["Thanks! ", "for all !"]}/> */}
      {/* <motion.div
        variants={variants}
        animate={cursorVariant}
        className="bg-gradient-to-br pointer-events-none from-red-200 via-red-200 to-rose-300 rounded-full h-3 w-3 md:h-9 md:w-9 xl:h-11 xl:w-11 fixed top-0 left-0"
      ></motion.div> */}
    </div>
  );
}

export default HelloComponents;
