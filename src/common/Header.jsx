import React from "react";
// import { useScroll, useTransform } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

//This is the Header for something fun
function Header() {
  return (
    <div className="absolute top-0 flex justify-center items-center flex-col w-full ">
      <div>
        <h3 className="text-gray-600  md:text-md xl:text-xl font-light text-xs sm:text-lg flex flex-row items-center justify-center">
          Made by
          <div className="font-bold px-1 md:text-md xl:text-xl text-xs sm:text-lg text-gray-500">
            <ReactTypingEffect speed={9} text={"Ly Pham"} />
          </div>
        </h3>
      </div>

      <div className="grid grid-cols-1">
        <h1 className="text-rose-600 md:text-3xl xl:text-4xl font-bold text-lg sm:text-2xl ">
          Avatar Creator
        </h1>
      </div>
    </div>
  );
}

export default Header;
